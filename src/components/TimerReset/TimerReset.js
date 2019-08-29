import React from 'react'

import styles from './TimerResetStyles'
import arrow from './arrow6.png'

const TimerReset = (props) => {
  return (
    <img src={arrow} style={styles} onClick={props.onClick} />
  )
}

export default TimerReset
