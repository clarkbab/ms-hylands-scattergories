import React from 'react'

import arrow from './arrow.png'
import styles from './NextStyles'

const Next = (props) => {
  return (
    <img alt='Next Letter' src={arrow} style={styles} onClick={props.onClick} />
  )
}

export default Next
