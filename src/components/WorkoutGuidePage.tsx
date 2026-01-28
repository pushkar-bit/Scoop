import { useState, useEffect } from 'react';
import './WorkoutGuidePage.css';

const workoutPrograms = [
  {
    id: 'full-body',
    name: 'Full Body Blast',
    duration: '45 min',
    difficulty: 'Intermediate',
    exercises: [
      { name: 'Barbell Squats', sets: 4, reps: 12, rest: 90, muscle: 'Legs' },
      { name: 'Bench Press', sets: 4, reps: 10, rest: 90, muscle: 'Chest' },
      { name: 'Pull-ups', sets: 3, reps: 10, rest: 60, muscle: 'Back' },
      { name: 'Overhead Press', sets: 3, reps: 12, rest: 60, muscle: 'Shoulders' },
      { name: 'Barbell Curls', sets: 3, reps: 12, rest: 45, muscle: 'Biceps' },
      { name: 'Planks', sets: 3, reps: '60 sec', rest: 45, muscle: 'Core' }
    ]
  },
  {
    id: 'upper-body',
    name: 'Upper Body Power',
    duration: '40 min',
    difficulty: 'Advanced',
    exercises: [
      { name: 'Barbell Bench Press', sets: 5, reps: 8, rest: 120, muscle: 'Chest' },
      { name: 'Barbell Rows', sets: 4, reps: 10, rest: 90, muscle: 'Back' },
      { name: 'Overhead Press', sets: 4, reps: 8, rest: 90, muscle: 'Shoulders' },
      { name: 'Dumbbell Flyes', sets: 3, reps: 12, rest: 60, muscle: 'Chest' },
      { name: 'Hammer Curls', sets: 3, reps: 12, rest: 45, muscle: 'Biceps' },
      { name: 'Tricep Dips', sets: 3, reps: 12, rest: 45, muscle: 'Triceps' }
    ]
  },
  {
    id: 'lower-body',
    name: 'Leg Day Destroyer',
    duration: '50 min',
    difficulty: 'Advanced',
    exercises: [
      { name: 'Barbell Squats', sets: 5, reps: 8, rest: 120, muscle: 'Quads' },
      { name: 'Romanian Deadlifts', sets: 4, reps: 10, rest: 90, muscle: 'Hamstrings' },
      { name: 'Leg Press', sets: 4, reps: 12, rest: 90, muscle: 'Quads' },
      { name: 'Leg Curls', sets: 3, reps: 15, rest: 60, muscle: 'Hamstrings' },
      { name: 'Calf Raises', sets: 4, reps: 20, rest: 45, muscle: 'Calves' },
      { name: 'Lunges', sets: 3, reps: 12, rest: 60, muscle: 'Legs' }
    ]
  },
  {
    id: 'beginner',
    name: 'Beginner Basics',
    duration: '30 min',
    difficulty: 'Beginner',
    exercises: [
      { name: 'Bodyweight Squats', sets: 3, reps: 15, rest: 60, muscle: 'Legs' },
      { name: 'Push-ups', sets: 3, reps: 12, rest: 60, muscle: 'Chest' },
      { name: 'Dumbbell Rows', sets: 3, reps: 12, rest: 60, muscle: 'Back' },
      { name: 'Shoulder Press', sets: 3, reps: 10, rest: 60, muscle: 'Shoulders' },
      { name: 'Planks', sets: 3, reps: '30 sec', rest: 45, muscle: 'Core' }
    ]
  }
];

function WorkoutTimer({ duration, isActive, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  
  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);
  
  useEffect(() => {
    if (!isActive || timeLeft <= 0) {
      if (timeLeft === 0 && onComplete) {
        onComplete();
      }
      return;
    }
    
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete]);
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((duration - timeLeft) / duration) * 100;
  
  return (
    <div className="workout-timer">
      <div className="timer-circle">
        <svg className="timer-svg" viewBox="0 0 200 200">
          <circle
            className="timer-bg"
            cx="100"
            cy="100"
            r="90"
          />
          <circle
            className="timer-progress"
            cx="100"
            cy="100"
            r="90"
            style={{
              strokeDashoffset: 565 - (565 * progress) / 100
            }}
          />
        </svg>
        <div className="timer-display">
          <span className="timer-time">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
          <span className="timer-label">
            {isActive ? 'Remaining' : 'Ready'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function WorkoutGuidePage() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [completedSets, setCompletedSets] = useState({});
  
  const startWorkout = (program) => {
    setSelectedProgram(program);
    setCurrentExerciseIndex(0);
    setIsResting(false);
    setIsTimerActive(false);
    setCompletedSets({});
  };
  
  const completeSet = () => {
    const currentExercise = selectedProgram.exercises[currentExerciseIndex];
    const exerciseKey = `${currentExerciseIndex}`;
    const currentSets = completedSets[exerciseKey] || 0;
    
    if (currentSets + 1 < currentExercise.sets) {
      setCompletedSets({
        ...completedSets,
        [exerciseKey]: currentSets + 1
      });
      setIsResting(true);
      setIsTimerActive(true);
    } else {
      // Move to next exercise
      if (currentExerciseIndex < selectedProgram.exercises.length - 1) {
        setCurrentExerciseIndex(currentExerciseIndex + 1);
        setIsResting(false);
        setIsTimerActive(false);
      } else {
        // Workout complete
        alert('🎉 Workout Complete! Great job!');
        setSelectedProgram(null);
      }
    }
  };
  
  const skipRest = () => {
    setIsResting(false);
    setIsTimerActive(false);
  };
  
  const exitWorkout = () => {
    if (confirm('Are you sure you want to exit this workout?')) {
      setSelectedProgram(null);
    }
  };
  
  if (selectedProgram) {
    const currentExercise = selectedProgram.exercises[currentExerciseIndex];
    const currentSets = completedSets[currentExerciseIndex] || 0;
    const restDuration = currentExercise.rest;
    
    return (
      <div className="workout-session">
        <div className="session-header">
          <button className="exit-btn" onClick={exitWorkout}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Exit
          </button>
          <h2>{selectedProgram.name}</h2>
          <div className="session-progress">
            {currentExerciseIndex + 1} / {selectedProgram.exercises.length}
          </div>
        </div>
        
        <div className="session-content">
          {isResting ? (
            <div className="rest-screen">
              <h1 className="rest-title">Rest Time</h1>
              <WorkoutTimer
                duration={restDuration}
                isActive={isTimerActive}
                onComplete={() => {
                  setIsResting(false);
                  setIsTimerActive(false);
                }}
              />
              <button className="btn btn-secondary skip-btn" onClick={skipRest}>
                Skip Rest
              </button>
            </div>
          ) : (
            <div className="exercise-screen">
              <div className="exercise-info">
                <div className="muscle-badge" style={{ background: 'var(--accent-primary)' }}>
                  {currentExercise.muscle}
                </div>
                <h1 className="exercise-title">{currentExercise.name}</h1>
                <div className="set-info">
                  <span className="set-number">Set {currentSets + 1} of {currentExercise.sets}</span>
                  <span className="rep-count">{currentExercise.reps} reps</span>
                </div>
              </div>
              
              <div className="exercise-visual">
                <div className="rep-display">
                  <span className="rep-number">{currentExercise.reps}</span>
                  <span className="rep-label">REPS</span>
                </div>
              </div>
              
              <div className="set-tracker">
                {Array.from({ length: currentExercise.sets }).map((_, i) => (
                  <div
                    key={i}
                    className={`set-dot ${i < currentSets ? 'completed' : ''} ${i === currentSets ? 'active' : ''}`}
                  />
                ))}
              </div>
              
              <button className="btn btn-gradient complete-set-btn" onClick={completeSet}>
                {currentSets + 1 < currentExercise.sets ? 'Complete Set' : 'Next Exercise'}
              </button>
              
              <div className="upcoming-exercises">
                <h3>Up Next</h3>
                <div className="upcoming-list">
                  {selectedProgram.exercises.slice(currentExerciseIndex + 1, currentExerciseIndex + 3).map((ex, i) => (
                    <div key={i} className="upcoming-item">
                      <span>{ex.name}</span>
                      <span className="upcoming-meta">{ex.sets}×{ex.reps}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div className="workout-guide-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">
            Workout <span className="text-gradient">Programs</span>
          </h1>
          <p className="page-subtitle">
            Structured workout sessions with built-in timer
          </p>
        </div>
        
        <div className="programs-grid">
          {workoutPrograms.map((program) => (
            <div key={program.id} className="program-card glass-card">
              <div className="program-header">
                <h2>{program.name}</h2>
                <div className="program-meta">
                  <span className={`difficulty-badge ${program.difficulty.toLowerCase()}`}>
                    {program.difficulty}
                  </span>
                  <span className="duration-badge">⏱️ {program.duration}</span>
                </div>
              </div>
              
              <div className="program-exercises">
                <h4>{program.exercises.length} Exercises</h4>
                <ul>
                  {program.exercises.map((ex, i) => (
                    <li key={i}>
                      <span>{ex.name}</span>
                      <span className="exercise-sets">{ex.sets}×{ex.reps}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                className="btn btn-primary start-workout-btn"
                onClick={() => startWorkout(program)}
              >
                Start Workout
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
