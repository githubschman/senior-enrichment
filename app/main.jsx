'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Routes from './components/Routes'
import Nav from './components/Nav'

render (
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main')
)