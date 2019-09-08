import React from 'react'

import CategoryList from '../CategoryList/CategoryList'
import styles from './CategoryListContainerStyles'

const CategoryListContainer = (props) => {
  return (
    <div style={styles}>
      <CategoryList categories={props.categories} />
    </div>
  )
}

export default CategoryListContainer
