
const styles = {
  container: (provided, state) => ({
    ...provided,
    color: '#FF943D',
    fontSize: '20px',
    fontWeight: '100',
    outline: 'none',
    width: '200px'
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'hsl(0,0%,80%)'
    },
    '&:focus-within': {
      borderColor: 'hsl(0,0%,80%)'
    }
  })
}

export default styles
