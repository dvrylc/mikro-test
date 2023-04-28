import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import ormConfig from './mikro-orm.config';
import { UserModule } from './modules';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransactionInterceptor } from './interceptors/transaction.interceptor';

@Module({
  imports: [MikroOrmModule.forRoot(ormConfig), UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransactionInterceptor,
    },
  ],
})
export class AppModule {}
