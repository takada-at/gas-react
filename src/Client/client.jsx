// eslint-disable-next-line
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './Global'

import Application from './Component/Application'

function showUi () {
  render(
    <Provider store={store}>
      <Application />
    </Provider>,
    document.getElementById('root'))
}

showUi()
global.showUi = showUi
