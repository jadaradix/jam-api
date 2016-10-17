# jam-api

Jimbo's Ad Maker API serves products RESTfully via restify. The following routes are available:
 * `/GET products` Returns an array of product objects with id, name and other properties
 * `/GET products/:id` Returns a product object; returns 404 if there's no product with that id


## Prerequisites

### (Optional) yarn

yarn is a superior package manager to npm, working as a replacement for the usual npm CLI.

```
npm install -g yarn
```


## Install

```
yarn
```

If you don't want to run `yarn` you can run `npm install` instead.

## Run

```
npm start
```

The default port is 8080. You can override this with the environment variable `JAM_API_PORT`.

```
JAM_API_PORT=8081 npm start
```


## Test

Tests are written with Mocha, Chai and SuperTest.

For SuperTest API tests to work, you'll need to run `npm start` first because SuperTest makes real requests. The tests also respect `JAM_API_PORT` and fall back to port 8080.

```
npm test
```
