import React from 'react'

import CategoryList from '../CategoryList/CategoryList'

const styles = {
  backgroundColor: 'lightgreen',
  display: 'flex',
  justifyContent: 'center'
}

const CategoryListContainer = () => {
  return (
    <div style={styles}>
      <CategoryList />
    </div>
  )
}

export default CategoryListContainer
