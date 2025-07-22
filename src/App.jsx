import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExerciseList from './components/ExerciseList'
import ExerciseDetail from './components/ExerciseDetail'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login';
import { muscleGroups } from './data/muscleGroups'
import { exercises } from './data/exercises'
import './styles/App.css'
function App() {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('all')
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState([])
  const [currentPage, setCurrentPage] = useState('home')
  // Filter exercises based on selected muscle group and search query
  const filteredExercises = exercises.filter(exercise => {
    const matchesMuscleGroup = selectedMuscleGroup === 'all' ||
                              exercise.muscleGroup === selectedMuscleGroup
    const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesMuscleGroup && matchesSearch
  })
  // Toggle favorite status for an exercise
  const toggleFavorite = (exerciseId) => {
    if (favorites.includes(exerciseId)) {
      setFavorites(favorites.filter(id => id !== exerciseId))
    } else {
      setFavorites([...favorites, exerciseId])
    }
  }
  // Handle exercise click to show details
  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // Close exercise details view
  const handleCloseDetail = () => {
    setSelectedExercise(null)
  }
  // Render content based on current page
  const renderContent = () => {
    if (currentPage === 'login') {
      return <Login />;
    }
    if (currentPage === 'about') {
      return <About />
    }
    if (currentPage === 'contact') {
      return <Contact />
    }
    return (
      <>
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
      </>
    )
  }
  return (
    <div className="app">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {renderContent()}
      <Footer />
    </div>
  )
}
export default App