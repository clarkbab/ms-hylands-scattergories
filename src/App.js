import React, { useState } from 'react'

import CategoryListContainer from './components/CategoryListContainer/CategoryListContainer'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import InfoBox from './components/InfoBox/InfoBox'
import styles from './AppStyles'

const App = () => {
  const [letterNum, setLetterNum] = useState(0)

  const incrementLetterNum = () => {
    setLetterNum(n => n + 1)
  }

  return (
    <div style={styles}>
      <Header />
      <InfoBox letterNum={letterNum} incrementLetterNum={incrementLetterNum} />
      <CategoryListContainer letterNum={letterNum} />
      <Footer />
    </div>
  )
}

export default App
