import { useState } from 'react';
import { muscleData } from '../data/muscleData';
import './HomePage.css';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('chest');
  const [hoveredMuscle, setHoveredMuscle] = useState(null);
  
  // Group muscles for the sidebar
  const muscleCategories = [
    { id: 'chest', label: 'Chest', icon: '⚡' },
    { id: 'back', label: 'Back', icon: '🔥' },
    { id: 'legs', label: 'Legs', icon: '🦵' },
    { id: 'shoulders', label: 'Shoulders', icon: '💪' },
    { id: 'arms', label: 'Arms', icon: '🦾' },
    { id: 'core', label: 'Core', icon: '🧘' }
  ];

  // Map internal muscle IDs to categories for display
  const getExercisesForCategory = (category) => {
    // In a real app, you might map multiple muscle groups to one category
    // For now, we'll map direct matches
    const muscleMap = {
      'chest': 'chest',
      'back': 'back',
      'legs': 'quads', // simplifying for demo
      'shoulders': 'shoulders',
      'arms': 'biceps',
      'core': 'abs'
    };
    
    const muscleId = muscleMap[category] || 'chest';
    return muscleData[muscleId]?.exercises || [];
  };

  const currentExercises = getExercisesForCategory(selectedCategory);

  return (
    <div className="home-page-black">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-text-box">
            <h1>UNLOCK YOUR<br />TRANSFORMATION</h1>
          </div>
        </div>
        <div className="hero-figure">
           {/* We can use an image or our interactive map here. 
               For the "exact" look, a central image is best, but let's use our interactive map centered. */}
           <div className="central-muscle-map">
              <img 
                src="/muscle-figure.png" 
                alt="Muscle Figure" 
                className="hero-figure-img" 
              />
           </div>
        </div>
      </section>

      {/* Exercises Section */}
      <section className="content-container">
        <h2 className="section-title">EXERCISES</h2>
        
        <div className="exercises-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            {muscleCategories.map((cat) => (
              <button 
                key={cat.id}
                className={`sidebar-item ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="sidebar-icon">{cat.icon}</span>
                <span className="sidebar-label">{cat.label}</span>
              </button>
            ))}
          </aside>

          {/* Grid */}
          <div className="exercises-grid-black">
             {currentExercises.map((exercise, idx) => (
               <div key={idx} className="exercise-card-black">
                 <div className="card-header">
                   <h3>{selectedCategory.toUpperCase()}</h3>
                   <span className="dot-menu">•</span>
                 </div>
                 <div className="card-content">
                    <div className="card-image-placeholder">
                      {/* You would put exercise images here */}
                      <div className="muscle-skeleton-icon">💀</div>
                    </div>
                    <div className="card-details">
                      <h4>{exercise.name}</h4>
                      <p className="card-subtext">Compound movement</p>
                      <div className="card-tags">
                        <span className="tag">3 sets</span>
                        <span className="tag">{exercise.reps}</span>
                      </div>
                    </div>
                 </div>
               </div>
             ))}
             {/* Duplicate for demo if few exercises */}
             {currentExercises.length < 4 && currentExercises.map((exercise, idx) => (
               <div key={`dup-${idx}`} className="exercise-card-black">
                 <div className="card-header">
                   <h3>{selectedCategory.toUpperCase()}</h3>
                   <span className="dot-menu">•</span>
                 </div>
                 <div className="card-content">
                    <div className="card-image-placeholder">
                      <div className="muscle-skeleton-icon">💀</div>
                    </div>
                    <div className="card-details">
                      <h4>{exercise.name}</h4>
                      <p className="card-subtext">Optimized form</p>
                      <div className="card-tags">
                        <span className="tag">4 sets</span>
                        <span className="tag">12 reps</span>
                      </div>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
