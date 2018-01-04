# pomodoro-api

All code related to the [api](https://pomodoro-api.now.sh).

## Install

To install dependencies you will need [yarn](https://yarnpkg.com/en/), so go get it if you don't have it yet.

```sh
yarn
```

## Running

On the first run, you will need to setup the database.

```sh
yarn db:setup
```

To start the development server.

```sh
yarn start
```

To run all the test suite.

```sh
yarn test
```

## Database

```
users
  id
  name
  email
  password

globals
  id
  key
  value

settings
  id
  user
  key
  value

types
  id
  name
  duration

entries
  id
  start
  end
  running
  type
  user

sessions
  id
  done
  type
  user
```

## Resources

```js
const index = () => {}
const show = (id) => {}
const create = (data) => {}
const update = (id, data) => {}
const destroy = (id) => {}
```
