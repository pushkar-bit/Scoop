import { useState } from 'react';
import { muscleData } from '../data/muscleData';
import './ExercisesPage.css';

export default function ExercisesPage() {
  const [selectedMuscle, setSelectedMuscle] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const muscles = Object.values(muscleData);

  const getFilteredExercises = () => {
    if (selectedMuscle === 'all') {
      return muscles.flatMap(muscle =>
        muscle.exercises.map(ex => ({ ...ex, muscleName: muscle.name, muscleColor: muscle.color }))
      );
    }

    const muscle = muscleData[selectedMuscle];
    return muscle.exercises.map(ex => ({ ...ex, muscleName: muscle.name, muscleColor: muscle.color }));
  };

  const filteredExercises = getFilteredExercises().filter(exercise =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="exercises-page">
      {/* Header */}
      <div className="exercises-header">
        <div className="container">
          <h1 className="page-title">
            Exercise <span className="text-gradient">Library</span>
          </h1>
          <p className="page-subtitle">
            Discover exercises for every muscle group
          </p>

          {/* Search Bar */}
          <div className="search-container">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search exercises..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Muscle Filter Navbar */}
      <div className="muscle-filter-nav">
        <div className="container">
          <div className="filter-scroll">
            <button
              className={`filter-chip ${selectedMuscle === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedMuscle('all')}
            >
              <span className="chip-icon">💪</span>
              All Muscles
            </button>

            {muscles.map((muscle) => (
              <button
                key={muscle.id}
                className={`filter-chip ${selectedMuscle === muscle.id ? 'active' : ''}`}
                onClick={() => setSelectedMuscle(muscle.id)}
                style={{
                  '--chip-color': muscle.color
                } as any}
              >
                <span className="chip-dot" style={{ background: muscle.color }}></span>
                {muscle.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Exercise Grid */}
      <div className="exercises-content">
        <div className="container">
          <div className="exercises-stats">
            <p>{filteredExercises.length} exercises found</p>
          </div>

          <div className="exercises-grid">
            {filteredExercises.map((exercise, index) => (
              <div key={index} className="exercise-item glass-card">
                <div className="exercise-item-header">
                  <div className="muscle-tag" style={{ background: exercise.muscleColor }}>
                    {exercise.muscleName}
                  </div>
                  <span className={`difficulty-badge ${exercise.difficulty.toLowerCase()}`}>
                    {exercise.difficulty}
                  </span>
                </div>

                <h3 className="exercise-name">{exercise.name}</h3>
                <p className="exercise-desc">{exercise.description}</p>

                <div className="exercise-stats">
                  <div className="stat-item">
                    <span className="stat-icon">📦</span>
                    <span className="stat-label">{exercise.equipment}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-icon">🔢</span>
                    <span className="stat-label">{exercise.sets}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-icon">🔁</span>
                    <span className="stat-label">{exercise.reps}</span>
                  </div>
                </div>

                <button className="btn btn-primary add-to-workout-btn">
                  Add to Workout
                </button>
              </div>
            ))}
          </div>

          {filteredExercises.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No exercises found</h3>
              <p>Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
