import { FlushMode, Options } from '@mikro-orm/core';

const ormConfig: Options = {
  entities: ['./dist/modules/database/entities'],
  entitiesTs: ['./src/modules/database/entities'],
  dbName: 'mikro-test.sqlite3',
  type: 'sqlite',
  debug: true,
  flushMode: FlushMode.COMMIT,
};

export default ormConfig;
