import React from 'react'

import App from './App'

const styles = {
  success: {
    color: 'limegreen ',
  },
  failure: {
    color: 'red',
  },
}

const Guessnumber = () => (
  <App
    title="Guessnumber"
    controls={
      <div className="input-group">
        <input className="form-control" type="number" placeholder="Place your guess here" min={1} max={100} />
        <span className="input-group-btn">
          <button className="btn btn-primary">Guess</button>
        </span>
      </div>
    }
    output={
      <div>
        <div style={styles.failure}>Too low ...</div>
        <div style={styles.failure}>Too high ...</div>
        <div style={styles.success}>Success! The number is 73</div>
      </div>
    }
  />
)

export default Guessnumber