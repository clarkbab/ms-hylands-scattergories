import React from 'react'

import Letter from '../Letter/Letter'
import Timer from '../Timer/Timer'
import styles from './InfoStyles'

const Info = (props) => {
  return (
    <div style={styles}>
      <Letter letterNum={props.letterNum} />
      <Timer letterNum={props.letterNum} />
    </div>
  )
}

export default Info
