# Migrations 

## Description

#### Development

During development we can use 

```json
// Package.json 

script: {
    ...
    "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js",
    "migration:generate": "npm run typeorm migration:generate -n",
    "migration:run": "npm run typeorm migration:run"
}

```

##### Production

During production we want to run our migration agi

```json
// Package.json 

script: {
    ...
    "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js",
    "migration:generate": "npm run build && npm run typeorm migration:generate -- -n",
    "migration:run": "npm run build && npm run typeorm migration:run"
}

```