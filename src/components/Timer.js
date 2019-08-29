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

const states = {
  PAUSED: 0,
  RUNNING: 1,
  RESET: 2
}

const startTime = 5
const resetTime = 1
var interval

const Timer = () => {
  const [state, setState] = useState({
    timerState: states.PAUSED,
    time: startTime,
    resetTime: resetTime
  })
  console.log(`rendering. time: ${state.time}. resetTime: ${state.resetTime}`)

  // Starts the countdown timer.
  const startTimer = () => {
    console.log('starting timer')
    setState(s => ({ ...s, timerState: states.RUNNING }))
    interval = setInterval(tickHandler, 1000)
  }

  // Pauses the countdown timer.
  const pauseTimer = () => {
    console.log('pausing timer')
    setState(s => ({ ...s, timerState: states.PAUSED }))
    clearInterval(interval)
  }

  // Performs the reset stage of the countdown timer.
  const resetTimer = () => {
    console.log('resetting timer')
    setState(s => ({ ...s, timerState: states.RESET }))
  }

  // Handles each timer click.
  const clickHandler = () => {
    switch (state.timerState) {
      // If timer is in RESET, we can't click on it.
      case states.PAUSED:
        startTimer()
        break
      case states.RUNNING:
        pauseTimer()
        break
      default: break
    }
  }

  // Handles each timer tick. 
  const tickHandler = () => {
    console.log('ticking')
    setState(s => {
      switch (s.timerState) {
        case states.RUNNING:
          // If timer is running, count down or reset. 
          if (s.time > 0) {
            return { ...s, time: s.time - 1 }
          } else {
            resetTimer()
            return { ...s, time: 0, resetTime: s.resetTime - 1 }
          }
        case states.RESET: {
          // If timer is in reset mode, count down to reset or reset.
          if (s.resetTime > 0) {
            return { ...s, resetTime: s.resetTime - 1 }
          } else {
            pauseTimer()
            return { ...s, time: startTime, resetTime: resetTime }
          }
        }
        default: return s
      }
    })
  }

  // Get background colour.
  let backColor
  switch (state.timerState) {
    case states.PAUSED: backColor = 'pink'; break
    case states.RUNNING: backColor = 'lightgreen'; break
    case states.RESET: backColor = 'orange'; break
    default: break
  }
  var styles = Object.assign({ backgroundColor: backColor }, baseStyles)

  return (
    <div>
      <div style={styles} onClick={clickHandler}>{state.time}s</div>
    </div>
  )
}

export default Timer
