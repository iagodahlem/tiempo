import { get } from './httpService'

export const last = () => get('/entries/last')
  .then(response => response.data)
