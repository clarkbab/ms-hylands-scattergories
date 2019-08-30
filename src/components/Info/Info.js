import React from 'react'

import Letter from '../Letter/Letter'
import Timer from '../Timer/Timer'

const styles = {
  backgroundColor: 'lightblue',
  display: 'flex',
  flexDirection: 'column'
}

const Info = (props) => {
  return (
    <div style={styles}>
      <Letter letterNum={props.letterNum} />
      <Timer letterNum={props.letterNum} />
    </div>
  )
}

export default Info
