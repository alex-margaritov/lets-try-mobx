import * as React from 'react'
import { render } from 'react-dom'

import { App } from './containers/App'
import { AppStore } from './stores/AppStore'

const appStore = new AppStore()

render(
  <App store={appStore} />,
  document.getElementById('app'),
)
