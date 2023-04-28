import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
  @Property()
  email: string;

  @Property()
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
    this.email = `${name}@example.com`;
  }
}
