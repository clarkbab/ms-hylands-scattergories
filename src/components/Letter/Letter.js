import React from 'react'

const styles = {
  fontSize: '80px',
  textAlign: 'center'
}

const randomLetter = () => {
  let minCharCode = 65
  let maxCharCode = 90
  let charCode = Math.floor(Math.random() * (maxCharCode + 1 - minCharCode) + minCharCode) 
  return String.fromCharCode(charCode)
}

const Letter = () => {
  return (
    <div style={styles}>{randomLetter()}</div>
  )
}

export default Letter
