# Mastering Express.js
Roadmap to Learn Express.js with Typescript | With Gun



# Table of Contents



---



# Header

Last Touched on 23 September 2022

| Parameter                           | Value                                                        | Note |
| ----------------------------------- | ------------------------------------------------------------ | ---- |
| Express.js Official Website         | [Click Here](https://expressjs.com/)                         |      |
| Express.js Github Repository        | [Click Here](https://github.com/expressjs/express)           |      |
| Express.js Releases - Latest 4.18.1 | [Click Here](https://github.com/expressjs/express/releases)  |      |
| Express.js Testing                  | [Click Here](https://github.com/expressjs/express/tree/master/test) |      |
|                                     |                                                              |      |



# Introduction



## Setup Environment

First create new **basic-server** directory then inside basic-server directory execute this command to initiate node project : 

```bash
$ npm init -y
```

Install express.js :

```bash
$ yarn add express
```

Install **typescript** and **ts-node/register** packages to the development dependencies on our project :

```bash
$ yarn add ts-node typescript -D
```

Since our development is using typescript we need to install node.js & express.js type definitions :

```bash
$ yarn add @types/node @types/express -D
```



---



## Setup Typescript Configs

To start typescript project, create new directory and execute this command :

```bash
$ tsc --init
```

Here is a minimum configurations from author :

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "./dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules"]
}
```

Then on file **package.json**, change the build command :

```json
  "scripts": {
    "build": "npx tsc"
  },
```

Later you can build the project by execute this command :

```bash
$ yarn build
```



---



## Setup Testing Tools

We will use mocha, chai and chai-http as our testing tools so we need to install this packages :

```bash
$ yarn add mocha chai chai-http -D
```

Then we need to install type definition for mocha and chai :

```bash
$ yarn add @types/mocha @types/chai -D
```





---



## Create Basic Server

Create new file name called **basic.ts** and wrote this code :

```typescript
import express, { Request, Response } from "express";
const app = express();
const port = "3000";

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

Then on file **package.json**, change the build command :

```json
  "scripts": {
    "build": "npx tsc",
    "start": "nodemon dist/basic.js"
  },
```

Then you can build the project by executing this command :

```bash
$ yarn build
```

After transpillation done, execute this command to start the application :

```bash
$ yarn start
```

The output of basic server is :

```
Server is running at http://localhost:3000
```



---



## Create Test File

Add test command on file **package.json** :

```json
  "scripts": {
    "build": "npx tsc",
    "start": "nodemon dist/basic.js",
    "test": "mocha -r ts-node/register 'tests/**/*.ts'"
  },
```

Later you can test the project by executing this command :

```bash
$ yarn test
```

Create tests directory and then
