import React from 'react'
import Spinner from '../Spinner'
import './Loader.css'

const Loader = () => (
  <section className='Loader'>
    <h1 className='Loader__title'>
      Pomodoro
    </h1>

    <Spinner />
  </section>
)

export default Loader
