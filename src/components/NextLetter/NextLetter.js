import React from 'react'

const styles = {
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  height: '100%',
  position: 'absolute',
  right: '50px'
}

const NextLetter = (props) => {
  return (
    <div style={styles} onClick={props.onClick}>Next</div>
  )
}

export default NextLetter
