# pomodoro-api

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
const update = (id) => {}
const destroy = (id) => {}
```
