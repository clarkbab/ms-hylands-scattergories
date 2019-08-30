import React from 'react'

import Header from './components/Header/Header'
import PageContainer from './components/PageContainer/PageContainer'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: ['Didactic', 'Helvetica', 'sans-serif'],
  height: '100vh'
}

function App() {
  return (
    <div style={styles}>
      <Header />
      <PageContainer />
    </div>
  )
}

export default App
