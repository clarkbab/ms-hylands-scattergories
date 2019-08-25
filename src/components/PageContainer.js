import React from 'react'

import InfoBox from './InfoBox'
import CategoryList from './CategoryList'

const style = {
  backgroundColor: 'lightgray',
  flex: 1,
}

const PageContainer = () => {
  return (
    <div style={style}>
      <InfoBox/>       
      <CategoryList/>       
    </div>
  )
}

export default PageContainer
