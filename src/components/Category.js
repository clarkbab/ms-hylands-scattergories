import React from 'react'

const styles = {
  color: 'blue',
  backgroundColor: 'pink'
}

const Category = ({name}) => {
  return <div style={styles}>{name}</div>
}

export default Category
