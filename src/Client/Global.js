import configureStore from './Store/index'

const state = window.__initialState__ || null

export const { store, history } = configureStore(state)
export const PRODUCTION = process.env.NODE_ENV === 'production'
