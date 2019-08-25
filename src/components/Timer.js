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
  console.log('rendering')
  const [paused, setPaused] = useState(true)
  const [seconds, setSeconds] = useState(period)

  // Handles each timer click.
  const clickHandler = () => {
    if (paused) {
      setPaused(p => false)
      interval = setInterval(tickHandler, 1000)
    } else {
      setPaused(p => true)
      clearInterval(interval)
    }
  }

  // Handles each timer count.
  const tickHandler = () => {
    if (seconds <= 0) {
      setPaused(p => true)
      clearInterval(interval)
      setSeconds(s => period)
    } else {
      setSeconds(s => s - 1)
    }
  }

  // Get background colour.
  var backColor = paused ? 'pink' : 'lightgreen'
  var styles = Object.assign({ backgroundColor: backColor }, baseStyles)

  return (
    <div>
      <div style={styles} onClick={clickHandler}>{seconds}s</div>
    </div>
  )
}

export default Timer
