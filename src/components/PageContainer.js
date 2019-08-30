import React, { useState } from 'react'

import InfoBox from './InfoBox'
import CategoryListContainer from './CategoryListContainer'

const styles = {
  backgroundColor: 'lightgray',
  flex: 1,
}

const PageContainer = () => {
  const [letterNum, setLetterNum] = useState(0)

  const incrementLetterNum = () => {
    setLetterNum(n => n + 1)
  }
  
  return (
    <div style={styles}>
      <InfoBox letterNum={letterNum} incrementLetterNum={incrementLetterNum} />       
      <CategoryListContainer letterNum={letterNum} />       
    </div>
  )
}

export default PageContainer
