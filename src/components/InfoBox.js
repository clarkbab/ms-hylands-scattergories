import React from 'react'

import Timer from './Timer'

const styles = {
  backgroundColor: 'lightblue',
  margin: '10px'
}

const InfoBox = () => {
  return (
    <div style={styles}>
      <Timer />
    </div>
  )
}

export default InfoBox
