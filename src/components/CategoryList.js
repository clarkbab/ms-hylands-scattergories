import React,{useEffect} from 'react'
import Category from './Category'
import categories from '../data/categories'

const styles = {
  backgroundColor: 'lightblue',
  margin: '10px'
}

const CategoryList = () => {
  useEffect(() => {
  }, [])

  return (
    <div style={styles}>
      {
        categories.map((c, i) => <Category key={i} name={c} />)
      }
    </div>
  )
}

export default CategoryList
