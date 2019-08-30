import React from 'react'

import Info from './Info/Info'
import NextLetter from './NextLetter/NextLetter'

const styles = {
  backgroundColor: 'lightblue',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative'
}

const InfoBox = (props) => {
  return (
    <div style={styles}>
      <Info letterNum={props.letterNum} />
      <NextLetter onClick={props.incrementLetterNum} />
    </div>
  )
}

export default InfoBox
