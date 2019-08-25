import React,{useEffect} from 'react'
import fs from 'fs'

import Category from './Category'

const styles = {
  backgroundColor: 'lightblue',
  margin: '10px'
}

const categories = [
  "Ponies",
  "Lollipops",
  "Teddy Bears"
]

const CategoryList = () => {
  useEffect(() => {
    console.log("read file")
    let path = '../data/categories.txt'
    fs.readFile(path, (e, c) => {
      console.log(c) 
    })
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
