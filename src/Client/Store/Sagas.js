import { fork } from 'redux-saga/effects'
import { rootSaga as Api } from './Api/Actions'

export function * rootSaga () {
  yield fork(Api)
}
