-- Production-Grade Database Schema for Scoop Fitness
-- Optimized for UUID-based scaling and modular exercise data

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE exercises (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    muscle_group TEXT NOT NULL,       -- Primary muscle (e.g., 'chest', 'back')
    subcategory TEXT,                 -- Regional focus (e.g., 'Upper', 'Middle', 'Lower')
    training_type TEXT NOT NULL,      -- Category (e.g., 'Bodybuilding', 'Calisthenics')
    name TEXT NOT NULL,               -- Unique exercise name
    video_url TEXT,                   -- Link to video tutorial (nullable)
    image_url TEXT,                   -- Link to exercise placeholder/GIF (nullable)
    difficulty TEXT NOT NULL,         -- 'Beginner', 'Intermediate', 'Advanced'
    equipment TEXT NOT NULL,          -- 'Barbell', 'Dumbbells', 'Bodyweight', etc.
    notes TEXT,                       -- Pro tips and trainer instructions
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indices for rapid filtering in the exercise library
CREATE INDEX idx_exercises_muscle ON exercises(muscle_group);
CREATE INDEX idx_exercises_training_type ON exercises(training_type);

-- Initial Seed Data Example (Matches the UI logic)
-- INSERT INTO exercises (muscle_group, subcategory, training_type, name, difficulty, equipment)
-- VALUES ('chest', 'Upper', 'Bodybuilding', 'Incline Dumbbell Press', 'Intermediate', 'Dumbbells');
