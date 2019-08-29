import React from 'react'

import styles from './TimerIndicatorStyles'

const TimerIndicator = (props) => {
  return (
    <div style={styles(props.timerState)} onClick={props.onClick}>{props.time}</div>
  )
}

export default TimerIndicator

