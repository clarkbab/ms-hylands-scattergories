import React from 'react'

import Info from '../Info/Info'
import Next from '../Next/Next'

const styles = {
  alignItems: 'center',
  backgroundColor: 'lightblue',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative'
}

const InfoBox = (props) => {
  return (
    <div style={styles}>
      <Info letterNum={props.letterNum} />
      <Next onClick={props.incrementLetterNum} />
    </div>
  )
}

export default InfoBox
