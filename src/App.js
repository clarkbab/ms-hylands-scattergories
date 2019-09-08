import React, { useState } from 'react'

import CategoryListContainer from './components/CategoryListContainer/CategoryListContainer'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import InfoBox from './components/InfoBox/InfoBox'
import subjects from './data/subjects.json'
import styles from './AppStyles'

const App = () => {
  const [letterNum, setLetterNum] = useState(0)
  const [subject, setSubject] = useState(subjects[0])
  console.log(letterNum)

  const incrementLetterNum = () => {
    setLetterNum(n => n + 1)
  }

  const onSubjectChange = (option) => {
    console.log(option)
    setSubject(option)
  }

  return (
    <div style={styles}>
      <Header onSubjectChange={onSubjectChange} />
      <InfoBox letterNum={letterNum} incrementLetterNum={incrementLetterNum} />
      <CategoryListContainer letterNum={letterNum} categories={subject.categories} />
      <Footer />
    </div>
  )
}

export default App
