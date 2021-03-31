# Migrations 

## Description



### Development

One of the main responsibilities of TypeORM is to keep our database tables in sync with schema objects, and it is a common requirement to change the schema object files during development of the Project.

The option “synchronize: true” in “typeorm-config.ts” can be used to keep the schema in sync with the database. 

This is the default setting, but what exactly is it? And how does it relate to migrations? According to the TypeORM README.md:

* “Synchronize makes sure your entities will be synced with the database, every time you run the application.”

Note: Be cautious about using this configuration in production since it syncs schemas with every application launch which can further lead to loss of existing data.


### Production

When it comes to changes in production environment, the solution below is recommended:

- First, set synchronize option in ormconfig.ts” to false (synchronize: false”). 
- Second, add script below to the package.json file. 

Following script should visualize an idea for production and in our CI/CD pipeline. We should also need to change some confing inside our *ormconfig.ts* file for production because this point to a specifc path at the moment. 

 **( THIS METHOD IS NOT TESTED YET!  )**
```json
// Package.json 

script: {
    ...
    "typeorm": "ts-node --project ./apps/api/tsconfig.migration.json -r tsconfig-paths/register ./node_modules/typeorm/cli.js --config apps/api/ormconfig.ts",
    "migration:generate": "npm run typeorm migration:generate -- -n",
    "migration:create": "npm run typeorm migration:create -- -n",
    "migration:run": "npm run typeorm migration:run",
}
```
** **
### Scripts

**Create a new migration**
You can create a new migration using CLI:

typeorm migration:create -n UserMigration
where UserMigration is a migration file and class name. Running the command will create a new empty migration in the migrationsDir of the project. To setup migrationsDir you must add it in connection options:

```js
{
    cli: {
        migrationsDir: "src/migration"
    }
}
```

```js
typeorm entity:create -n User
```


**Revert migrations**

To revert the most recently executed migration use the following command:

```
typeorm migration:revert
```

This command will undo only the last executed migration.
You can execute this command multiple times to revert multiple migrations.
Learn more about [Migrations](./migrations.md).

**Show migrations**
To show all migrations and whether they've been run or not use following command:

```
typeorm migration:show
```

[X] = Migration has been ran

[ ] = Migration is pending/unapplied

This command also returns an error code if there are unapplied migrations.

**Sync database schema**

To synchronize a database schema use:
```
typeorm schema:sync
```

Be careful running this command in production - 
schema sync may cause data loss if you don't use it wisely.
Check which sql queries it will run before running on production.


## Problems

During the research and testing I found a few problems when trying to integrate tsconfig into TypeORM migration with our tsconfig file. 

- Since [ts-node](https://www.npmjs.com/package/ts-node) does not include **"paths"** in runtime, we need to use [tsconfig-paths](https://www.npmjs.com/package/tsconfig-paths) to solve this.

- We also needed to specify which tsconfig file we wanted to run in the script because it is based on the root directory.


# Seeding

