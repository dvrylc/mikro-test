import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  async findAll() {
    const users = await this.service.deleteAndCreate();
    return users;
  }
}
