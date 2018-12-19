import * as types from '../Api/Actions'

export const initialState = {
  userEmail: null
}

export function userEmail (state = initialState, action) {
  switch (action.type) {
  case types.LOAD_MAIL_SUCCESS:
    return Object.assign({}, state, {
      userEmail: action.result
    })
  default:
    return state
  }
}
