import { useState } from 'react'
import '../styles/ExerciseCard.css'
const ExerciseCard = ({ exercise, onClick, isFavorite, onToggleFavorite }) => {
  const [isHovered, setIsHovered] = useState(false)
  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    onToggleFavorite()
  }
  return (
    <div 
      className="exercise-card"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image-container">
        <img src={exercise.imageUrl} alt={exercise.name} className="card-image" />
        <div className={`card-overlay ${isHovered ? 'visible' : ''}`}>
          <button className="view-button">View Details</button>
        </div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{exercise.name}</h3>
          <button 
            className={`favorite-button ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" 
              fill={isFavorite ? "currentColor" : "none"} 
              stroke={isFavorite ? "none" : "currentColor"} 
              strokeWidth="2"/>
            </svg>
          </button>
        </div>
        <div className="card-details">
          <span className="muscle-group">{exercise.category}</span>
          <span className="difficulty">{exercise.muscles && exercise.muscles[0]}</span>
        </div>
        <p className="card-description">{exercise.description && exercise.description.replace(/<[^>]+>/g, '').slice(0, 80)}...</p>
      </div>
    </div>
  )
}
export default ExerciseCard