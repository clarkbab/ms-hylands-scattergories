import React from 'react'
import './App.css'

import Header from './components/Header'
import PageContainer from './components/PageContainer'

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
