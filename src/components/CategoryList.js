import React from 'react'
import Category from './Category'
import categories from '../data/categories'

const styles = {
  backgroundColor: 'lightblue',
  display: 'inline-block',
  padding: '20px'
}

const CategoryList = () => {
  return (
    <div style={styles}>
      {
        categories.map((c, i) => <Category key={i} name={c} />)
      }
    </div>
  )
}

export default CategoryList
