import React, { useState } from 'react'

import styles from './LetterStyles'

const randomLetter = () => {
  let minCharCode = 65
  let maxCharCode = 90
  let charCode = Math.floor(Math.random() * (maxCharCode + 1 - minCharCode) + minCharCode) 
  return String.fromCharCode(charCode)
}

const Letter = (props) => {
  const [state, setState] = useState({
    letter: randomLetter(),
    letterNum: props.letterNum
  })

  // Change the letter if global reset has been triggered.
  if (state.letterNum !== props.letterNum) {
    setState(s => ({ ...s, letterNum: props.letterNum, letter: randomLetter() }))
  }

  return (
    <div style={styles}>{state.letter}</div>
  )
}

export default Letter
