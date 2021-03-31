import { environment } from './src/environments/environment';

module.exports = {
  type: 'mysql',
  host: environment.mysql.host,
  port: environment.mysql.port,
  username: environment.mysql.username,
  password: environment.mysql.password,
  database: environment.mysql.database,
  migrationsTableName: 'migrations',
  synchronize: false,
  // entities: ['../../../dist/apps/api/**/*.entity.js'],
  // migrations: ['../../../dist/apps/api/src/db/migrations/*.js'],
  entities: [__dirname + '/src/app/**/*.entity.ts'],
  migrations: [__dirname + '/src/db/migrations/*.ts'],

  cli: {
    migrationsDir: './apps/api/src/db/migrations',
    // migrationsDir: './apps/api/src/db/migrations',
  },
};
