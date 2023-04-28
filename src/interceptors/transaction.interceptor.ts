import { EntityManager, RequestContext } from '@mikro-orm/core';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { from, lastValueFrom, tap } from 'rxjs';

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  constructor(private em: EntityManager) {}

  intercept(_: ExecutionContext, next: CallHandler) {
    return from(
      RequestContext.createAsync(this.em, async () => {
        console.log('==== interceptor start ====');

        const retval = lastValueFrom(
          next.handle().pipe(
            tap(async () => {
              await this.em.flush();
              console.log('==== interceptor end ====');
            }),
          ),
        );

        return retval;
      }),
    );
  }
}
