import { combineReducers } from 'redux'
import { rpc } from './Rpc/Reducer'
import { notify } from './Notify/Reducer'
import { sheetValues } from './SheetValues/Reducer'

export const reducer = combineReducers(
  {
    notify, rpc, sheetValues
  })
