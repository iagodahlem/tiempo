import { get } from './httpService'

export const index = () => get('/types')
  .then(response => response.data)
