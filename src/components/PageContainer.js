import React from 'react'

import TimerBox from './TimerBox'
import CategoryListContainer from './CategoryListContainer'

const styles = {
  backgroundColor: 'lightgray',
  flex: 1,
}

const PageContainer = () => {
  return (
    <div style={styles}>
      <TimerBox />       
      <CategoryListContainer />       
    </div>
  )
}

export default PageContainer
