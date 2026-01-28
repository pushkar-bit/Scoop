import { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './HistoryPage.css';

// Mock data - in real app, this would come from localStorage or backend
const mockWorkoutHistory = [
  { id: 1, date: '2026-01-20', program: 'Full Body Blast', duration: 45, exercises: 6, calories: 320 },
  { id: 2, date: '2026-01-18', program: 'Upper Body Power', duration: 40, exercises: 6, calories: 280 },
  { id: 3, date: '2026-01-16', program: 'Leg Day Destroyer', duration: 50, exercises: 6, calories: 380 },
  { id: 4, date: '2026-01-14', program: 'Full Body Blast', duration: 45, exercises: 6, calories: 315 },
  { id: 5, date: '2026-01-12', program: 'Beginner Basics', duration: 30, exercises: 5, calories: 210 },
  { id: 6, date: '2026-01-10', program: 'Upper Body Power', duration: 40, exercises: 6, calories: 290 },
  { id: 7, date: '2026-01-08', program: 'Full Body Blast', duration: 45, exercises: 6, calories: 325 },
];

const weeklyData = [
  { day: 'Mon', workouts: 1, calories: 320 },
  { day: 'Tue', workouts: 0, calories: 0 },
  { day: 'Wed', workouts: 1, calories: 280 },
  { day: 'Thu', workouts: 0, calories: 0 },
  { day: 'Fri', workouts: 1, calories: 380 },
  { day: 'Sat', workouts: 1, calories: 315 },
  { day: 'Sun', workouts: 0, calories: 0 },
];

const muscleGroupData = [
  { name: 'Chest', value: 15, color: '#FF6B6B' },
  { name: 'Back', value: 12, color: '#00B894' },
  { name: 'Legs', value: 20, color: '#FFD93D' },
  { name: 'Shoulders', value: 10, color: '#4ECDC4' },
  { name: 'Arms', value: 13, color: '#95E1D3' },
  { name: 'Core', value: 8, color: '#F38181' },
];

export default function HistoryPage() {
  const [workoutHistory, setWorkoutHistory] = useState(mockWorkoutHistory);
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  const totalWorkouts = workoutHistory.length;
  const totalMinutes = workoutHistory.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = workoutHistory.reduce((sum, w) => sum + w.calories, 0);
  const avgDuration = Math.round(totalMinutes / totalWorkouts);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  return (
    <div className="history-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">
            Workout <span className="text-gradient">History</span>
          </h1>
          <p className="page-subtitle">
            Track your progress and achievements
          </p>
        </div>
        
        {/* Stats Overview */}
        <div className="stats-grid">
          <div className="stat-card glass-card">
            <div className="stat-icon" style={{ background: 'var(--accent-primary)' }}>
              🏋️
            </div>
            <div className="stat-content">
              <div className="stat-value">{totalWorkouts}</div>
              <div className="stat-label">Total Workouts</div>
            </div>
          </div>
          
          <div className="stat-card glass-card">
            <div className="stat-icon" style={{ background: 'var(--accent-purple)' }}>
              ⏱️
            </div>
            <div className="stat-content">
              <div className="stat-value">{totalMinutes}</div>
              <div className="stat-label">Minutes Trained</div>
            </div>
          </div>
          
          <div className="stat-card glass-card">
            <div className="stat-icon" style={{ background: 'var(--accent-success)' }}>
              🔥
            </div>
            <div className="stat-content">
              <div className="stat-value">{totalCalories}</div>
              <div className="stat-label">Calories Burned</div>
            </div>
          </div>
          
          <div className="stat-card glass-card">
            <div className="stat-icon" style={{ background: 'var(--accent-warning)' }}>
              📊
            </div>
            <div className="stat-content">
              <div className="stat-value">{avgDuration}</div>
              <div className="stat-label">Avg Duration (min)</div>
            </div>
          </div>
        </div>
        
        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-card glass-card">
            <h3>Weekly Activity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(28, 28, 30, 0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: 'white'
                  }}
                />
                <Bar dataKey="workouts" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="chart-card glass-card">
            <h3>Muscle Group Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={muscleGroupData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {muscleGroupData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: 'rgba(28, 28, 30, 0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: 'white'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="legend">
              {muscleGroupData.map((item, index) => (
                <div key={index} className="legend-item">
                  <div className="legend-color" style={{ background: item.color }}></div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Workout History List */}
        <div className="history-section">
          <h2>Recent Workouts</h2>
          <div className="history-list">
            {workoutHistory.map((workout) => (
              <div key={workout.id} className="history-item glass-card">
                <div className="history-date">
                  <div className="date-day">{new Date(workout.date).getDate()}</div>
                  <div className="date-month">
                    {new Date(workout.date).toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                </div>
                
                <div className="history-details">
                  <h4>{workout.program}</h4>
                  <div className="history-meta">
                    <span>⏱️ {workout.duration} min</span>
                    <span>💪 {workout.exercises} exercises</span>
                    <span>🔥 {workout.calories} cal</span>
                  </div>
                </div>
                
                <button className="btn btn-secondary view-btn">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div className="achievements-section">
          <h2>Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card glass-card">
              <div className="achievement-icon">🏆</div>
              <h4>First Workout</h4>
              <p>Completed your first workout</p>
            </div>
            <div className="achievement-card glass-card">
              <div className="achievement-icon">🔥</div>
              <h4>Week Warrior</h4>
              <p>Worked out 3 times this week</p>
            </div>
            <div className="achievement-card glass-card locked">
              <div className="achievement-icon">⭐</div>
              <h4>Month Master</h4>
              <p>Complete 20 workouts in a month</p>
            </div>
            <div className="achievement-card glass-card locked">
              <div className="achievement-icon">💎</div>
              <h4>Consistency King</h4>
              <p>30-day workout streak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
