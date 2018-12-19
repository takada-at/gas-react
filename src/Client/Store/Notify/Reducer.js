import * as types from './Actions'

export const initialState = {
  messages: [],
  errors: [],
  loading: false
}

export function notify (state = initialState, action) {
  switch (action.type) {
  case types.ADD_MESSAGE:
    const past = state.messages
    const message = {
      messageId: past.length + 1,
      message: action.message,
      actions: action.actions
    }
    const messages = [...past, message]
    return Object.assign({}, state, {
      messages
    })
  case types.READ_MESSAGE:
    const newMessages = state.messages.filter(message => message.messageId !== action.messageId)
    return Object.assign({}, state, {
      messages: newMessages
    })
  case types.ADD_ERROR:
    const pastErrors = state.errors
    const error = {
      messageId: pastErrors.length + 1,
      message: action.message
    }
    const errors = [...pastErrors, error]
    return Object.assign({}, state, {
      errors
    })
  case types.READ_ERROR_MESSAGE:
    const newErrors = state.errors.filter(message => message.messageId !== action.messageId)
    return Object.assign({}, state, {
      errors: newErrors
    })
  case types.START_LOADING:
    return Object.assign({}, state, {
      loading: true
    })
  case types.COMPLETE_LOADING:
    return Object.assign({}, state, {
      loading: false
    })
  default:
    return state
  }
}
