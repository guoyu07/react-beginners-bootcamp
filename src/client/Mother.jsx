// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Flip from './Flip'
import ProtectedRoute from './ProtectedRoute'
import Guessnumber from './Guessnumber'
import Fizzbuzz from './Fizzbuzz'
import Auth from './Auth'
import Nav from './Nav'

class Mother extends React.Component {

  state = {
    username: '',
    role: 'guest',
    greetingMessage: 'Hello guest',
  }

  signup = (username: string) => {
    this.setState({
      username,
      role: 'newUser',
      greetingMessage: `Welcome aboard ${username}`,
    })
  }

  login = (username: string) => {
    this.setState({
      username,
      role: 'user',
      greetingMessage: `Welcome back ${username}`,
    })
  }

  render() {
    return (
      <div>
        <Nav greetingMessage={this.state.greetingMessage} />
        <Switch>
          <Route path="/flip" component={Flip} />
          <Route path="/guessnumber" component={Guessnumber} />
          <ProtectedRoute
            path="/fizzbuzz"
            component={<Fizzbuzz />}
          />
          <Route
            exact
            path="/"
            render={() =>
              <Auth
                onLogin={this.login}
                greetingMessage={this.state.greetingMessage}
                onSignup={this.signup}
              />
            }
          />
        </Switch>
      </div>
    )
  }
}

export default Mother