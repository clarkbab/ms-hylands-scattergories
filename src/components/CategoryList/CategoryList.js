import React from 'react'

import Category from '../Category/Category'
import styles from './CategoryListStyles'

const numCategories = 7

// Take n random samples from the categories array.
const sample = (array, n) => {
  var shuffled = array.slice(0), i = array.length, temp, index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, n);
}

const CategoryList = (props) => {
  return (
    <div style={styles}>
      { sample(props.categories, numCategories).map((c, i) => <Category key={i} name={c} />) }
    </div>
  )
}

export default CategoryList
