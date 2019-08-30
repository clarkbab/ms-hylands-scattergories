import React from 'react'

import Category from '../Category/Category'
import categories from './categories'

const styles = {
  backgroundColor: 'lightblue',
  display: 'inline-block',
  padding: '20px'
}

const numCategories = 7

// Take n random samples from the array.
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

const CategoryList = () => {
  return (
    <div style={styles}>
      { sample(categories, numCategories).map((c, i) => <Category key={i} name={c} />) }
    </div>
  )
}

export default CategoryList
