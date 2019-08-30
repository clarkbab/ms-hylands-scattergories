import React from 'react'

const styles = {
  backgroundColor: 'pink',
  fontSize: '20px',
  padding: '10px'
}

const Category = ({name}) => {
  return <div style={styles}>{name}</div>
}

export default Category
