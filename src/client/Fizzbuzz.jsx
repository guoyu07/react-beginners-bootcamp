// @flow

import React from 'react'

import App from './App'

class Fizzbuzz extends React.Component {
  state = {
    startingNumberInput: '1',
    endingNumberInput: '15',
    divisibleNumber1Input: '3',
    divisibleWord1Input: 'Fizz',
    divisibleNumber2Input: '5',
    divisibleWord2Input: 'Buzz',
    outputStrings: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '12', '13', '14', 'FizzBuzz'],
  }

  renderOutput() {
    return this.state.outputStrings.map((s, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={idx}>{s}</div>
    ))
  }
  render() {
    return (
      <App
        title="Fizzbuzz"
        controls={
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="starting-number">Starting Number</label>
                  <input
                    id="starting-number"
                    onChange={evt => this.setState({ startingNumberInput: evt.target.value })}
                    value={this.state.startingNumberInput}
                    className="form-control"
                    type="number"
                    placeholder="starting number"
                    max={10}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="ending-number">Ending Number</label>
                  <input
                    id="ending-number"
                    className="form-control"
                    type="number"
                    placeholder="ending number"
                    onChange={evt => this.setState({ endingNumberInput: evt.target.value })}
                    value={this.state.endingNumberInput}
                    max={50}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-1">Divisible Number #1</label>
                  <input
                    id="divisible-number-1"
                    className="form-control"
                    type="number"
                    placeholder="divisible number #1"
                    onChange={evt => this.setState({ divisibleNumber1Input: evt.target.value })}
                    value={this.state.divisibleNumber1Input}
                    max={10}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-1">Divisible Word #1</label>
                  <input
                    id="divisible-word-1"
                    className="form-control"
                    placeholder="divisible word #1"
                    onChange={evt => this.setState({ divisibleWord1Input: evt.target.value })}
                    value={this.state.divisibleWord1Input}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-2">Divisible Number #2</label>
                  <input
                    id="divisible-number-2"
                    className="form-control"
                    type="number"
                    placeholder="divisible number #2"
                    onChange={evt => this.setState({ divisibleNumber2Input: evt.target.value })}
                    value={this.state.divisibleNumber2Input}
                    max={20}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-2">Divisible Word #2</label>
                  <input
                    id="divisible-word-2"
                    className="form-control"
                    placeholder="divisible word #2"
                    onChange={evt => this.setState({ divisibleWord2Input: evt.target.value })}
                    value={this.state.divisibleWord2Input}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button onClick={() => { console.log('fizzbuzz hit me') }} className="btn btn-primary btn-block">Hit me!</button>
              </div>
              <div className="col-md-6">
                <button onClick={() => { console.log('fizzbuzz reset') }} className="btn btn-default btn-block">Reset</button>
              </div>
            </div>
          </div>
        }
        output={
          <div>
            {this.renderOutput()}
          </div>
        }
      />
    )
  }
}

export default Fizzbuzz
