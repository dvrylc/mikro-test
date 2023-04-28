import { Migration } from '@mikro-orm/migrations';

export class Migration20230428045854 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table `user` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null, `email` text not null, `name` text not null);',
    );
  }
}
