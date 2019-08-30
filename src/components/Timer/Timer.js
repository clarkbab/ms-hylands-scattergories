import React, { useState } from 'react'

import states from './TimerStates'
import styles from './TimerStyles'
import TimerIndicator from '../TimerIndicator/TimerIndicator'
import TimerReset from '../TimerReset/TimerReset'
import soundfile from './airhorn.mp3'

const startTime = 60
const resetTime = 2
var interval

const shouldShowReset = (state) => {
  return state.timerState === states.RUNNING || (state.timerState === states.PAUSED && state.time !== startTime)
}

const shouldPlaySound = (state) => {
  return state.timerState === states.RESET
}

const Timer = (props) => {
  const [state, setState] = useState({
    timerState: states.PAUSED,
    time: startTime,
    resetTime: resetTime,
    letterNum: props.letterNum
  })

  // Starts the countdown timer.
  const startTimer = () => {
    setState(s => ({ ...s, timerState: states.RUNNING }))
    interval = setInterval(tickHandler, 1000)
  }

  // Pauses the countdown timer.
  const pauseTimer = () => {
    setState(s => ({ ...s, timerState: states.PAUSED }))
    clearInterval(interval)
  }

  // Performs the reset stage of the countdown timer.
  const resetTimer = () => {
    setState(s => ({ ...s, timerState: states.RESET }))
  }

  // Performs a hard reset of the countdown timer.
  const hardReset = () => {
    pauseTimer()
    setState(s => ({ ...s, time: startTime }))
  }

  // Reset the timer if global reset has been triggered.
  if (state.letterNum !== props.letterNum) {
    hardReset()
    setState(s => ({ ...s, letterNum: props.letterNum }))
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
    setState(s => {
      switch (s.timerState) {
        case states.RUNNING:
          // If timer is running, count down or reset. 
          if (s.time > 1) {
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

  return (
    <div style={styles}>
      <TimerIndicator time={state.time} timerState={state.timerState} onClick={clickHandler} />
      { shouldShowReset(state) && <TimerReset onClick={hardReset} /> }
      { shouldPlaySound(state) && <audio src={soundfile} autoPlay /> }
    </div>
  )
}

export default Timer
