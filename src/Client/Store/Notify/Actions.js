export const ADD_MESSAGE = 'ADD_MESSAGE'
export const READ_MESSAGE = 'READ_MESSAGE'
export const ADD_ERROR = 'ADD_ERROR'
export const READ_ERROR_MESSAGE = 'READ_ERROR_MESSAGE'
export const START_LOADING = 'START_LOADING'
export const COMPLETE_LOADING = 'COMPLETE_LOADING'

export function addMessage (message, actions = []) {
  return {
    type: ADD_MESSAGE,
    message,
    actions
  }
}

export function readMessage (messageId) {
  return {
    type: READ_MESSAGE,
    messageId
  }
}

export function addError (message) {
  return {
    type: ADD_ERROR,
    message
  }
}

export function readErrorMessage (messageId) {
  return {
    type: READ_ERROR_MESSAGE,
    messageId
  }
}

