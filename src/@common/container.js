import { asValue } from 'awilix'
import { storageService } from '@common/infra'

export default {
  storageService: asValue(storageService),
}
