import { mobile } from '../../common/Window.js'

const baseStyles = {
  alignItems: 'center',
  color: 'red',
  display: 'flex',
  fontSize: '40px',
  justifyContent: 'space-between',
  padding: '0 10px'
}

const styles = (width) => {
  let flexDirection
  let height
  let margin

  if (mobile(width)) {
    flexDirection = 'column'
    height = '120px'
    margin = '10px'
  } else {
    flexDirection = 'row'
    height = '80px'
    margin = 'none'
  }

  return Object.assign({
    flexDirection: flexDirection,
    height: height,
    margin: margin,
  }, baseStyles)
}

export default styles
