import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExerciseList from './components/ExerciseList'
import ExerciseDetail from './components/ExerciseDetail'
import Footer from './components/Footer'
import { muscleGroups } from './data/muscleGroups'
import { exercises } from './data/exercises'
import './styles/App.css'

function App() {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('all')
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState([])

  const filteredExercises = exercises.filter(exercise => {
    const matchesMuscleGroup = selectedMuscleGroup === 'all' || 
                              exercise.muscleGroup === selectedMuscleGroup
    const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesMuscleGroup && matchesSearch
  })

  const toggleFavorite = (exerciseId) => {
    if (favorites.includes(exerciseId)) {
      setFavorites(favorites.filter(id => id !== exerciseId))
    } else {
      setFavorites([...favorites, exerciseId])
    }
  }

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  const handleCloseDetail = () => {
    setSelectedExercise(null)
  }

  return (
    <div className="app">
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      {selectedExercise ? (
        <ExerciseDetail 
          exercise={selectedExercise} 
          onClose={handleCloseDetail}
          isFavorite={favorites.includes(selectedExercise.id)}
          onToggleFavorite={() => toggleFavorite(selectedExercise.id)}
        />
      ) : (
        <>
          <Hero />
          <div className="muscle-group-filter">
            <h2>Exercise Library</h2>
            <div className="filter-buttons">
              <button 
                className={selectedMuscleGroup === 'all' ? 'active' : ''}
                onClick={() => setSelectedMuscleGroup('all')}
              >
                All Exercises
              </button>
              {muscleGroups.map(group => (
                <button 
                  key={group.id}
                  className={selectedMuscleGroup === group.id ? 'active' : ''}
                  onClick={() => setSelectedMuscleGroup(group.id)}
                >
                  {group.name}
                </button>
              ))}
            </div>
          </div>
          <ExerciseList 
            exercises={filteredExercises}
            onExerciseClick={handleExerciseClick}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </>
      )}
      
      <Footer />
    </div>
  )
}

export default App