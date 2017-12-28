import { allIds, byId } from '../services/normalizeService'

const sessions = [
  { id: '1', type: '97d6206a-13f2-4e79-83e0-225d2aef8a80', done: false },
  { id: '2', type: '71c74191-748a-4e01-84fe-9fc024be3ca4', done: false },
  { id: '3', type: '97d6206a-13f2-4e79-83e0-225d2aef8a80', done: false },
  { id: '4', type: '71c74191-748a-4e01-84fe-9fc024be3ca4', done: false },
  { id: '5', type: '97d6206a-13f2-4e79-83e0-225d2aef8a80', done: false },
  { id: '6', type: '05671c72-2620-4e46-b022-b77cd46fbd4b', done: false },
]

export default {
  allIds: allIds(sessions),
  byId: byId(sessions),
}
