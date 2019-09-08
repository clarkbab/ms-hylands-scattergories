import React from 'react'
import Select from 'react-select'
import styles from './SubjectSelectStyles'
import subjects from '../../data/subjects.json'

const SubjectSelect = (props) => {
  const noOptions = () => {
    return 'Not found.'
  }

  return (
      <Select
        components={{ IndicatorSeparator: () => null }}
        noOptionsMessage={noOptions}
        onChange={props.onChange}
        options={subjects}
        placeholder='Subject...'
        styles={styles}
      /> 
  )
}

export default SubjectSelect
