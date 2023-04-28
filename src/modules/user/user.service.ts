import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { User } from '../database';
import { randomBytes } from 'crypto';

@Injectable()
export class UserService {
  constructor(private readonly em: EntityManager) {}

  async deleteAndCreate() {
    await this.deleteAll();

    this.createOne();
    this.createOne();
    this.createOne();

    // await this.em.findOneOrFail(User, { id: 9 });

    return await this.findAll();
  }

  private async findAll() {
    const users = await this.em.find(User, {});
    return users;
  }

  private async deleteAll() {
    const users = await this.findAll();
    this.em.remove(users);
  }

  private createOne() {
    const name = randomBytes(8).toString('hex');
    const user = new User(name);
    this.em.persist(user);
  }
}
