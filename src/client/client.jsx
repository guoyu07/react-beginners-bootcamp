// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import Welcome from './Welcome'
import Flip from './Flip'
import Guessnumber from './Guessnumber'
import Fizzbuzz from './Fizzbuzz'
import Auth from './Auth'

const render = (AppComponent, selectorName) => {
  ReactDOM.render(
    <AppComponent />,
    // flow-disable-next-line
    document.querySelector(selectorName),
  )
}

render(Welcome, '#root')
render(Flip, '#flip-app')
render(Guessnumber, '#guessnumber-app')
render(Fizzbuzz, '#fizzbuzz-app')
render(Auth, '#auth-app')

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./Welcome', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./Welcome').default
    render(nextApp)
  })
  // flow-disable-next-line
  module.hot.accept('./Flip', () => {
    // eslint-disable-next-line global-require
    const nextFlip = require('./Flip').default
    render(nextFlip)
  })
  // flow-disable-next-line
  module.hot.accept('./Guessnumber', () => {
    // eslint-disable-next-line global-require
    const nextGuessnumber = require('./Guessnumber').default
    render(nextGuessnumber)
  })
  // flow-disable-next-line
  module.hot.accept('./Fizzbuzz', () => {
    // eslint-disable-next-line global-require
    const nextFizzbuzz = require('./Fizzbuzz').default
    render(nextFizzbuzz)
  })
  // flow-disable-next-line
  module.hot.accept('./Auth', () => {
    // eslint-disable-next-line global-require
    const nextAuth = require('./Auth').default
    render(nextAuth)
  })
}
