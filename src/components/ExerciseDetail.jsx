import { useState, useEffect } from 'react'
import ExerciseTimer from './ExerciseTimer'
import '../styles/ExerciseDetail.css'

const ExerciseDetail = ({ exercise, onClose, isFavorite, onToggleFavorite }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [timerActive, setTimerActive] = useState(false)
  const [repCount, setRepCount] = useState(0)
  
  useEffect(() => {
    setCurrentStep(0)
    setTimerActive(false)
    setRepCount(0)
  }, [exercise])
  
  const incrementReps = () => {
    setRepCount(repCount + 1)
  }
  
  const decrementReps = () => {
    if (repCount > 0) {
      setRepCount(repCount - 1)
    }
  }
  
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }
  
  const goToNextStep = () => {
    if (currentStep < exercise.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }
  
  return (
    <div className="exercise-detail">
      <div className="detail-header">
        <button className="back-button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="currentColor"/>
          </svg>
          Back to Exercises
        </button>
        <button 
          className={`detail-favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={onToggleFavorite}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" 
            fill={isFavorite ? "currentColor" : "none"} 
            stroke={isFavorite ? "none" : "currentColor"} 
            strokeWidth="2"/>
          </svg>
          {isFavorite ? 'Favorited' : 'Add to Favorites'}
        </button>
      </div>
      
      <div className="detail-content">
        <div className="detail-main">
          <h1 className="detail-title">{exercise.name}</h1>
          
          <div className="detail-info">
            <span className="detail-muscle-group">Muscle Group: {exercise.muscleGroup}</span>
            <span className="detail-difficulty">Difficulty: {exercise.difficulty}</span>
            <span className="detail-equipment">Equipment: {exercise.equipment}</span>
          </div>
          
          <p className="detail-description">{exercise.description}</p>
          
          <div className="tutorial-section">
            <h2>Step-by-Step Tutorial</h2>
            <div className="tutorial-navigation">
              <div className="step-counter">
                Step {currentStep + 1} of {exercise.steps.length}
              </div>
              <div className="navigation-buttons">
                <button 
                  className="nav-button" 
                  onClick={goToPreviousStep}
                  disabled={currentStep === 0}
                >
                  Previous
                </button>
                <button 
                  className="nav-button" 
                  onClick={goToNextStep}
                  disabled={currentStep === exercise.steps.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
            
            <div className="tutorial-step">
              <div className="step-image">
                <img 
                  src={exercise.steps[currentStep].imageUrl || exercise.imageUrl} 
                  alt={`Step ${currentStep + 1}`} 
                />
              </div>
              <div className="step-instructions">
                <h3>Step {currentStep + 1}: {exercise.steps[currentStep].title}</h3>
                <p>{exercise.steps[currentStep].instruction}</p>
                {exercise.steps[currentStep].tip && (
                  <div className="step-tip">
                    <strong>Tip:</strong> {exercise.steps[currentStep].tip}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="detail-sidebar">
          <div className="detail-image">
            <img src={exercise.imageUrl} alt={exercise.name} />
          </div>
          
          <div className="workout-tools">
            <h3>Workout Tools</h3>
            
            <div className="tool-section">
              <h4>Timer</h4>
              <ExerciseTimer 
                isActive={timerActive} 
                onToggle={() => setTimerActive(!timerActive)} 
              />
            </div>
            
            <div className="tool-section">
              <h4>Rep Counter</h4>
              <div className="rep-counter">
                <button className="counter-button" onClick={decrementReps}>-</button>
                <span className="rep-count">{repCount}</span>
                <button className="counter-button" onClick={incrementReps}>+</button>
              </div>
            </div>
            
            <div className="recommended-section">
              <h4>Recommended Sets & Reps</h4>
              <p>{exercise.recommendations}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExerciseDetail