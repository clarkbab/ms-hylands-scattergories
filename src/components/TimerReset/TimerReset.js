import React from 'react'

import styles from './TimerResetStyles'
import arrow from './arrow.png'

const TimerReset = (props) => {
  return (
    <img alt='timer-reset' src={arrow} style={styles} onClick={props.onClick} />
  )
}

export default TimerReset
