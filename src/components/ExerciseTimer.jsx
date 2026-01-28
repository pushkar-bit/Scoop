import { useState, useEffect, useRef } from 'react'
import '../styles/ExerciseTimer.css'

const ExerciseTimer = ({ isActive, onToggle }) => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const timerRef = useRef(null)
  
  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 59) {
            setMinutes(prevMinutes => prevMinutes + 1)
            return 0
          }
          return prevSeconds + 1
        })
      }, 1000)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isActive])
  
  const resetTimer = () => {
    setSeconds(0)
    setMinutes(0)
    if (isActive) {
      onToggle()
    }
  }
  
  const formatTime = (val) => {
    return val < 10 ? `0${val}` : val
  }
  
  return (
    <div className="exercise-timer">
      <div className="timer-display">
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
      <div className="timer-controls">
        <button className="timer-button" onClick={onToggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="timer-button reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default ExerciseTimer