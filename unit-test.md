## Mock and seeding documentation

### Mocking
#### Location
All mock functionality can be found under ***/libs/mocks***. 
```
root
  +-- .vscode
  +-- apps
  +-- dist
  +-- libs
    +-- api-interfaces  <-- Location of all shared typescript interfaces.  
    +-- mocks  <-- Location of all mock functions. 
  +-- tools
  ...
  ...
```
#### Mock methods for a specific area 

**User**
```js
withId()
withRole(role)
withStatus(UserStatusEnum)
model()

enum UserStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
```

**User role**
```js
withId()
withRole(UserRolesEnum)
withDescription(string)
model()

enum UserRolesEnum {
  ADMIN = 'admin',
  USER = 'user',
}

```

**User permissions**
```js
withId()
withPermission(UserPermissionEnum)
withDescription(string)
model()

enum UserPermissionEnum {
  NONE = 'none',
  READ = 'read',
  WRITE = 'write',
}
```

#### Example of usage for users

Mocking a new user

```js
import { UserMock } from '@monorepo-test/mocks';

const user = new UserMock().model();

/* 
{
    id: 'e2b60b5a-63f1-40cf-bee1-8f56de1a99c8',
    email: 'Jordan.Ward@hotmail.com',
    value: 'inactive',
    roleId: null
}
*/
```

Mocking a new user with a specific status
```js
import { UserMock } from '@monorepo-test/mocks';
import { UserStatusEnum } from '@monorepo-test/api-interfaces';


// Change status of a user
const user = new UserMock()
                .withStatus(UserStatusEnum.ACTIVE)
                .model();

/* 
{
    id: 'e2b60b5a-63f1-40cf-bee1-8f56de1a99c8',
    email: 'Jordan.Ward@hotmail.com',
    value: 'active',
}

*/
```

Mocking a new user with a specific status
```js
import { UserMock } from '@monorepo-test/mocks';
import { UserStatusEnum } from '@monorepo-test/api-interfaces';


// Change status of a user
const user = new UserMock()
                .withStatus(UserStatusEnum.ACTIVE)
                .model();

/* 
{
    id: 'e2b60b5a-63f1-40cf-bee1-8f56de1a99c8',
    email: 'Jordan.Ward@hotmail.com',
    value: 'active',
}

*/
```

Mocking a new user with a specific user role.

```js
import { UserMock, UserRoleMock } from '@monorepo-test/mocks';

const user = new UserMock()
                .withId()
                .withRole(
                  new UserRoleMock().withId().model()
                )
                .model()

/* 
{
    email: 'Dallin_McLaughlin90@hotmail.com',
    value: 'active',
    id: 'bffc37a9-12af-4020-a5da-b7d21a7962ca',
    role: {
      handle: '306c21c0-1fb4-4815-ad4d-a80aa606dcb2',
      displayName: 'user',
      description: null,
      id: 'b2934c3f-7c87-445f-afc8-b6fc76080767'
    }
}
*/ 

```

### Seeding

#### Location
All seeding functionality can be found under ***/apps/api/src/seeding***. 
```
root 
  +-- apps
    +-- api
      +-- src
        +-- app
        +-- assets
        +-- enviroments
        +-- seeding
          +-- permissions  <-- All seeding logic connected to permissions
          +-- roles  <-- All seeding logic connected to roles
          +-- users  <-- All seeding logic connected to users
          +-- seeder.module.ts  <-- Our seed module where we intiliaze our datbase with typeorm
          +-- seeder.ts  <-- Intialize our diffrent seed functions.
          +-- main.ts 
          +-- seed.ts  <-- Start file for our seeding script

```

#### How to use the seeder



1) Navigate to the root folder of the project.
2) Install all dependencies 
```js
npm install
```
3) Run seed script
```js
npm run seed
```

Our seeder will then fill out the database from our defined entities inside our api application. 

***REMBER***
If you run the application several times, it will only create new users at this point. This design is created to prevent duplication of data and performance issues. 


#### Ideas for the future
Something that could be relevant to implement to make our seeder better is that you can decide how many entities you want to create.

We could achieve this by using:

```js
npm install command-line-args
npm install @types/command-line-args --save-dev
```

Implementing a solution with this would probably not be particularly difficult.

We should then run the script in following way: 

```js
npm run seed --users=100
```
