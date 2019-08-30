import React from 'react'

import arrow from './arrow.png'

const styles = {
  cursor: 'pointer',
  height: '50%',
  position: 'absolute',
  right: '50px'
}

const Next= (props) => {
  return (
    <img src={arrow} style={styles} onClick={props.onClick} />
  )
}

export default Next
