# jam-api

Jimbo's Ad Maker API


## Prerequisites

### yarn

yarn is a superior package manager, working as a replacement for the npm CLI. I recommend you use yarn over npm although a regular `npm install` will work. Install yarn:

```
npm install -g yarn
```


## Install

```
yarn
```


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