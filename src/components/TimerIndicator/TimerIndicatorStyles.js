import states from '../Timer/TimerStates'

const baseStyles = {
  alignItems: 'center',
  borderRadius: '50%',
  display: 'flex',
  fontWeight: 'lighter',
  fontSize: '40px',
  height: '100px',
  justifyContent: 'center',
  width: '100px',
}

const styles = (timerState) => {
  // Get background colour.
  let backgroundColor
  let cursor
  switch (timerState) {
    case states.PAUSED: 
      backgroundColor = 'pink'
      cursor = 'pointer'
      break
    case states.RUNNING:
      backgroundColor = 'lightgreen'
      cursor = 'pointer'
      break
    case states.RESET:
      backgroundColor = 'orange'
      cursor = 'auto'
      break
    default: break
  }
  
  // Merge with defaults.
  return Object.assign({
    backgroundColor: backgroundColor,
    cursor: cursor
  }, baseStyles)
}

export default styles
