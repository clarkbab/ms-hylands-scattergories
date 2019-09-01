import React from 'react'

import styles from './LetterStyles'

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
