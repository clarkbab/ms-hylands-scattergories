import React from 'react'

import Logo from '../Logo/Logo'

const styles = {
  backgroundColor: 'yellow',
  color: 'red',
  fontSize: '40px',
  height: '80px'
}

const Header = () => {
  return (
    <div style={styles}>
      <Logo />
    </div>
  )
}

export default Header
