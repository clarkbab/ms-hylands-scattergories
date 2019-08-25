import React,{useEffect, useState} from 'react'

const styles = {
}

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(60)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`time remaining ${timeRemaining}`)
      setTimeRemaining(t => t - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div>{timeRemaining}s</div>
      <input type='button' onClick={() => setTimeRemaining(timeRemaining - 1)} />
    </div>
  )
}

export default Timer
