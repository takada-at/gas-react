import * as types from './Actions'

export const initialState = {
  loading: false
}

export function rpc (state = initialState, action) {
  switch (action.type) {
  case types.LOADING_START:
    return Object.assign({}, state, {
      loading: true
    })
  case types.LOADING_COMPLETE:
    return Object.assign({}, state, {
      loading: false
    })
  default:
    return state
  }
}
