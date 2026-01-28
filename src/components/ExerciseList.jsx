import ExerciseCard from './ExerciseCard'
import '../styles/ExerciseList.css'

const ExerciseList = ({ exercises, onExerciseClick, favorites, onToggleFavorite }) => {
  const favoriteExercises = exercises.filter(exercise => favorites.includes(exercise.id))
  const regularExercises = favorites.length > 0 
    ? exercises.filter(exercise => !favorites.includes(exercise.id))
    : exercises

  if (exercises.length === 0) {
    return (
      <div className="no-results">
        <h3>No exercises found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="exercise-list-container" id="exercises">
      {favoriteExercises.length > 0 && (
        <div className="favorites-section">
          <h3 className="section-title">Your Favorites</h3>
          <div className="exercise-grid">
            {favoriteExercises.map(exercise => (
              <ExerciseCard 
                key={exercise.id}
                exercise={exercise}
                onClick={() => onExerciseClick(exercise)}
                isFavorite={true}
                onToggleFavorite={() => onToggleFavorite(exercise.id)}
              />
            ))}
          </div>
        </div>
      )}
      
      <div className="all-exercises-section">
        {favoriteExercises.length > 0 && <h3 className="section-title">All Exercises</h3>}
        <div className="exercise-grid">
          {regularExercises.map(exercise => (
            <ExerciseCard 
              key={exercise.id}
              exercise={exercise}
              onClick={() => onExerciseClick(exercise)}
              isFavorite={favorites.includes(exercise.id)}
              onToggleFavorite={() => onToggleFavorite(exercise.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExerciseList