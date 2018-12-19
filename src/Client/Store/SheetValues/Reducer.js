import * as types from '../Api/Actions'

export const initialState = {
  values: []
}

export function sheetValues (state = initialState, action) {
  switch (action.type) {
  case types.GET_SHEET_VALUES_SUCCESS:
    return Object.assign({}, state, {
      values: action.result.map((r) => r[0])
    })
  default:
    return state
  }
}
