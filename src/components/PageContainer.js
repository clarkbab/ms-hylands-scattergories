import React from 'react'

import InfoBox from './InfoBox'
import Categories from './Categories'

const style = {
  backgroundColor: 'lightgray',
  flex: 1,
}

const PageContainer = () => {
  return (
    <div style={style}>
      <InfoBox/>       
      <Categories/>       
    </div>
  )
}

export default PageContainer
