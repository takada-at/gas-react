import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { reducer } from './Reducers'
import { rootSaga } from './Sagas'
import { PRODUCTION } from '../Global'

export default function configureStore () {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  if (!PRODUCTION) {
    middlewares.push(createLogger())
  }
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  const store = createStore(reducer, enhancer)
  sagaMiddleware.run(rootSaga)
  return {
    store
  }
}
