import { environment } from './src/environments/environment';

console.log(__dirname + '/src/app/**/*.entity.ts');
module.exports = {
  type: 'mysql',
  host: environment.mysql.host,
  port: environment.mysql.port,
  username: environment.mysql.username,
  password: environment.mysql.password,
  database: environment.mysql.database,
  synchronize: false,
  entities: [__dirname + '/src/app/**/*.entity.ts'],
  migrations: [__dirname + '/src/app/migrations/*.ts'],

  cli: {
    migrationsDir: __dirname + '/src/migrations',
  },
};
