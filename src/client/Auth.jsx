// @flow

import React from 'react'

import App from './App'

type Props = {
  name: string,
  role: string,
  onLogin: Function,
  onSignup: Function,
}

class Auth extends React.Component {
  state = {
    nameInput: '',
  }

  props: Props

  renderOutput() {
    const { role, name } = this.props
    if (role === 'guest') {
      return <p>Hello guest</p>
    }
    if (role === 'user') {
      return <p>Welcome back {name}</p>
    }
    return <p>Welcome aboard {name}!</p>
  }

  render() {
    return (
      <App
        title="Auth"
        controls={
          <div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input
                  placeholder="Name"
                  className="form-control"
                  value={this.state.nameInput}
                  onChange={evt => this.setState({ nameInput: evt.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input type="email" placeholder="Email" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <input type="password" placeholder="Password" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-primary btn-block" onClick={() => this.props.onSignup(this.state.nameInput)}>Signup</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-default btn-block" onClick={() => this.props.onLogin(this.state.nameInput)}>Login</button>
              </div>
            </div>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default Auth
