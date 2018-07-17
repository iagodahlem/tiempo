import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TimerActions from './TimerActions'
import TimerFooter from './TimerFooter'
import TimerHeader from './TimerHeader'
import TimerLapse from './TimerLapse'
import Loader from '../../components/Loader'
import './Timer.css'

class Timer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    connectSocket: PropTypes.func.isRequired,
    loadInitialData: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.isLoading !== this.props.isLoading) {
      return true
    }

    return false
  }

  componentDidMount() {
    this.connect()
      .then(() => this.load())
  }

  connect() {
    return this.props.connectSocket()
  }

  load() {
    return this.props.loadInitialData()
  }

  render() {
    return (
      this.props.isLoading ? (
        <Loader />
      ) : (
        <section className='Timer'>
          <TimerHeader />

          <div className='Timer__container'>
            <TimerLapse />
            <TimerActions />
          </div>

          <TimerFooter />
        </section>
      )
    )
  }
}

export default Timer
