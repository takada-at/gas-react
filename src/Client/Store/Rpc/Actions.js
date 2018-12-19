import { put } from 'redux-saga/effects'
import Remote from '../../Remote'
import { addError } from '../Notify/Actions'

export const LOADING_START = 'LOADING_START'
export const LOADING_COMPLETE = 'LOADING_COMPLETE'

export function loadingStart () {
  return {
    type: LOADING_START
  }
}

export function loadingComplete () {
  return {
    type: LOADING_COMPLETE
  }
}

export function * callRpc (func, ...args) {
  yield put(loadingStart())
  let result = null
  let error = null
  try {
    console.log('rpc call', func, args)
    result = yield Remote.runPromise(func, args)
  } catch (e) {
    error = e
    console.log('rpc error', e)
    yield put(addError(error.toString()))
  }
  console.log('rpc call result', result, error)
  yield put(loadingComplete())
  return { result, error }
}
