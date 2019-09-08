import React, { useState } from 'react'

import Logo from '../Logo/Logo'
import SubjectSelect from '../SubjectSelect/SubjectSelect'
import styles from './HeaderStyles'

const Header = (props) => {
  const [width, setWidth] = useState(window.innerWidth) 

  // Re-render component on window resize by changing state.
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth)
  })

  return (
    <div style={styles(width)}>
      <Logo />
      <SubjectSelect onChange={props.onSubjectChange} />
    </div>
  )
}

export default Header
