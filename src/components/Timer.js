import React, { useState } from 'react'

const baseStyles = {
  alignItems: 'center',
  borderRadius: '50%',
  display: 'flex',
  height: '50px',
  justifyContent: 'center',
  margin: '0 auto',
  width: '50px',
}

const period = 5
var interval

const Timer = () => {
  const [paused, setPaused] = useState(true)
  const [time, setTime] = useState(period)
  console.log(`render time: ${time}`)

  const startTimer = () => {
    console.log('starting timer')
    setPaused(p => false)
    interval = setInterval(() => {
      setTime(t => t - 1) 
    }, 1000)
  }

  const pauseTimer = () => {
    console.log('pausing timer')
    setPaused(p => true)
    clearInterval(interval)
  }

  // Handles each timer click.
  const clickHandler = () => {
    if (paused) {
      startTimer()
    } else {
      pauseTimer()
    }
  }

  // Get background colour.
  var backColor = paused ? 'pink' : 'lightgreen'
  var styles = Object.assign({ backgroundColor: backColor }, baseStyles)

  return (
    <div>
      <div style={styles} onClick={clickHandler}>{time}s</div>
    </div>
  )
}

export default Timer
