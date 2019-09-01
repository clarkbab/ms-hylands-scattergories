import states from '../Timer/TimerStates'

const baseStyles = {
  alignItems: 'center',
  borderRadius: '50%',
  display: 'flex',
  fontWeight: 'lighter',
  fontSize: '30px',
  height: '60px',
  justifyContent: 'center',
  width: '60px',
}

const styles = (timerState) => {
  // Get background colour.
  let backgroundColor
  let cursor
  switch (timerState) {
    case states.PAUSED: 
      backgroundColor = '#90EE90'
      cursor = 'pointer'
      break
    case states.RUNNING:
      backgroundColor = '#FFC0CB'
      cursor = 'pointer'
      break
    case states.RESET:
      backgroundColor = '#FCC55D'
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
