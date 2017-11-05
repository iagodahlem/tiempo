import React, { Component } from 'react'
import './App.css'

class App extends Component {
  handleStartTimer = (event) => {
    const { startTimer } = this.props

    startTimer()
  }

  render() {
    const { start } = this.props

    return (
      <div className='App'>
        <h1 className='App__title'>Pomodoro</h1>
        <p>{start}</p>
        <button onClick={this.handleStartTimer}>Start</button>
      </div>
    )
  }
}

export default App
