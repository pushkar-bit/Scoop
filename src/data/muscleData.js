export const muscleData = {
  chest: {
    id: 'chest',
    name: 'Chest',
    scientificName: 'Pectoralis Major',
    position: { x: 0, y: 0.3, z: 0.15 },
    color: '#FF6B6B',
    description: 'The pectoralis major is a thick, fan-shaped muscle that makes up the bulk of the chest muscle. It helps move the arm across the body and rotate it inward.',
    functions: [
      'Arm flexion and adduction',
      'Internal rotation of the shoulder',
      'Assists in deep breathing'
    ],
    exercises: [
      {
        name: 'Barbell Bench Press',
        sets: '4 sets',
        reps: '8-12 reps',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        description: 'Lie on bench, lower bar to chest, press up explosively'
      },
      {
        name: 'Dumbbell Flyes',
        sets: '3 sets',
        reps: '10-15 reps',
        difficulty: 'Beginner',
        equipment: 'Dumbbells',
        description: 'Lie on bench, arms extended, lower weights in arc motion'
      },
      {
        name: 'Push-ups',
        sets: '3 sets',
        reps: '15-20 reps',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        description: 'Classic bodyweight exercise for chest development'
      },
      {
        name: 'Cable Crossovers',
        sets: '3 sets',
        reps: '12-15 reps',
        difficulty: 'Intermediate',
        equipment: 'Cable Machine',
        description: 'Stand between cables, bring handles together in front'
      }
    ],
    transformation: {
      beginner: 'Focus on form with push-ups and light dumbbell work',
      intermediate: 'Add barbell movements and increase volume',
      advanced: 'Incorporate advanced techniques like drop sets and supersets'
    }
  },
  
  shoulders: {
    id: 'shoulders',
    name: 'Shoulders',
    scientificName: 'Deltoids',
    position: { x: 0.25, y: 0.4, z: 0.1 },
    color: '#4ECDC4',
    description: 'The deltoid muscle is a large triangular muscle covering the shoulder joint. It consists of three parts: anterior, lateral, and posterior.',
    functions: [
      'Arm abduction and rotation',
      'Shoulder flexion and extension',
      'Stabilizes shoulder joint'
    ],
    exercises: [
      {
        name: 'Overhead Press',
        sets: '4 sets',
        reps: '8-10 reps',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        description: 'Press barbell overhead from shoulder height'
      },
      {
        name: 'Lateral Raises',
        sets: '3 sets',
        reps: '12-15 reps',
        difficulty: 'Beginner',
        equipment: 'Dumbbells',
        description: 'Raise dumbbells to sides until parallel with ground'
      },
      {
        name: 'Front Raises',
        sets: '3 sets',
        reps: '12-15 reps',
        difficulty: 'Beginner',
        equipment: 'Dumbbells',
        description: 'Raise dumbbells in front to shoulder height'
      },
      {
        name: 'Face Pulls',
        sets: '3 sets',
        reps: '15-20 reps',
        difficulty: 'Beginner',
        equipment: 'Cable Machine',
        description: 'Pull rope attachment toward face, great for rear delts'
      }
    ],
    transformation: {
      beginner: 'Start with light lateral raises and front raises',
      intermediate: 'Add overhead pressing movements',
      advanced: 'Incorporate heavy compound lifts and isolation work'
    }
  },
  
  biceps: {
    id: 'biceps',
    name: 'Biceps',
    scientificName: 'Biceps Brachii',
    position: { x: 0.2, y: 0.1, z: 0.12 },
    color: '#95E1D3',
    description: 'The biceps brachii is a two-headed muscle that runs from the shoulder to the elbow on the front of the upper arm.',
    functions: [
      'Elbow flexion',
      'Forearm supination',
      'Shoulder flexion assistance'
    ],
    exercises: [
      {
        name: 'Barbell Curls',
        sets: '4 sets',
        reps: '8-12 reps',
        difficulty: 'Beginner',
        equipment: 'Barbell',
        description: 'Curl barbell up while keeping elbows stationary'
      },
      {
        name: 'Hammer Curls',
        sets: '3 sets',
        reps: '10-12 reps',
        difficulty: 'Beginner',
        equipment: 'Dumbbells',
        description: 'Curl with neutral grip, targets brachialis'
      },
      {
        name: 'Preacher Curls',
        sets: '3 sets',
        reps: '10-15 reps',
        difficulty: 'Intermediate',
        equipment: 'EZ Bar',
        description: 'Curl on preacher bench for strict form'
      },
      {
        name: 'Concentration Curls',
        sets: '3 sets',
        reps: '12-15 reps',
        difficulty: 'Beginner',
        equipment: 'Dumbbell',
        description: 'Seated single-arm curls for peak contraction'
      }
    ],
    transformation: {
      beginner: 'Focus on basic curls with proper form',
      intermediate: 'Add variety with different curl variations',
      advanced: 'Implement advanced techniques like 21s and drop sets'
    }
  },
  
  abs: {
    id: 'abs',
    name: 'Abs',
    scientificName: 'Rectus Abdominis',
    position: { x: 0, y: 0, z: 0.15 },
    color: '#F38181',
    description: 'The rectus abdominis is a paired muscle running vertically on each side of the anterior wall of the abdomen.',
    functions: [
      'Trunk flexion',
      'Core stabilization',
      'Breathing assistance'
    ],
    exercises: [
      {
        name: 'Crunches',
        sets: '3 sets',
        reps: '15-20 reps',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        description: 'Lie on back, lift shoulders off ground'
      },
      {
        name: 'Planks',
        sets: '3 sets',
        reps: '30-60 sec',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        description: 'Hold body in straight line on forearms'
      },
      {
        name: 'Hanging Leg Raises',
        sets: '3 sets',
        reps: '10-15 reps',
        difficulty: 'Advanced',
        equipment: 'Pull-up Bar',
        description: 'Hang from bar, raise legs to 90 degrees'
      },
      {
        name: 'Russian Twists',
        sets: '3 sets',
        reps: '20-30 reps',
        difficulty: 'Intermediate',
        equipment: 'Medicine Ball',
        description: 'Seated rotation exercise for obliques'
      }
    ],
    transformation: {
      beginner: 'Start with basic crunches and planks',
      intermediate: 'Add weighted movements and variations',
      advanced: 'Focus on hanging movements and advanced core work'
    }
  },
  
  quads: {
    id: 'quads',
    name: 'Quadriceps',
    scientificName: 'Quadriceps Femoris',
    position: { x: 0.15, y: -0.5, z: 0.12 },
    color: '#FFD93D',
    description: 'The quadriceps femoris is a large muscle group that includes four prevailing muscles on the front of the thigh.',
    functions: [
      'Knee extension',
      'Hip flexion',
      'Leg stabilization'
    ],
    exercises: [
      {
        name: 'Barbell Squats',
        sets: '4 sets',
        reps: '8-12 reps',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        description: 'King of leg exercises, squat down and drive up'
      },
      {
        name: 'Leg Press',
        sets: '4 sets',
        reps: '10-15 reps',
        difficulty: 'Beginner',
        equipment: 'Leg Press Machine',
        description: 'Press weight away with feet shoulder-width'
      },
      {
        name: 'Lunges',
        sets: '3 sets',
        reps: '12-15 reps',
        difficulty: 'Beginner',
        equipment: 'Dumbbells',
        description: 'Step forward and lower back knee toward ground'
      },
      {
        name: 'Leg Extensions',
        sets: '3 sets',
        reps: '12-15 reps',
        difficulty: 'Beginner',
        equipment: 'Leg Extension Machine',
        description: 'Extend legs from seated position'
      }
    ],
    transformation: {
      beginner: 'Master bodyweight squats and lunges',
      intermediate: 'Add barbell squats and leg press',
      advanced: 'Heavy compound lifts with advanced techniques'
    }
  },
  
  hamstrings: {
    id: 'hamstrings',
    name: 'Hamstrings',
    scientificName: 'Hamstring Group',
    position: { x: 0.15, y: -0.5, z: -0.12 },
    color: '#6C5CE7',
    description: 'The hamstrings are a group of three muscles running along the back of the thigh.',
    functions: [
      'Knee flexion',
      'Hip extension',
      'Leg deceleration'
    ],
    exercises: [
      {
        name: 'Romanian Deadlifts',
        sets: '4 sets',
        reps: '8-12 reps',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        description: 'Hinge at hips, lower bar along legs'
      },
      {
        name: 'Leg Curls',
        sets: '3 sets',
        reps: '12-15 reps',
        difficulty: 'Beginner',
        equipment: 'Leg Curl Machine',
        description: 'Curl legs toward glutes from prone position'
      },
      {
        name: 'Nordic Curls',
        sets: '3 sets',
        reps: '6-10 reps',
        difficulty: 'Advanced',
        equipment: 'Bodyweight',
        description: 'Eccentric hamstring exercise, very challenging'
      },
      {
        name: 'Good Mornings',
        sets: '3 sets',
        reps: '10-12 reps',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        description: 'Hinge forward with bar on shoulders'
      }
    ],
    transformation: {
      beginner: 'Start with leg curls and light RDLs',
      intermediate: 'Increase weight on compound movements',
      advanced: 'Add Nordic curls and heavy deadlift variations'
    }
  },
  
  back: {
    id: 'back',
    name: 'Back',
    scientificName: 'Latissimus Dorsi',
    position: { x: 0, y: 0.2, z: -0.15 },
    color: '#00B894',
    description: 'The latissimus dorsi is the largest muscle in the upper body, creating the V-taper shape.',
    functions: [
      'Shoulder extension and adduction',
      'Internal rotation',
      'Assists in breathing'
    ],
    exercises: [
      {
        name: 'Pull-ups',
        sets: '4 sets',
        reps: '8-12 reps',
        difficulty: 'Intermediate',
        equipment: 'Pull-up Bar',
        description: 'Pull body up until chin over bar'
      },
      {
        name: 'Barbell Rows',
        sets: '4 sets',
        reps: '8-12 reps',
        difficulty: 'Intermediate',
        equipment: 'Barbell',
        description: 'Bend over, pull bar to lower chest'
      },
      {
        name: 'Lat Pulldowns',
        sets: '3 sets',
        reps: '10-15 reps',
        difficulty: 'Beginner',
        equipment: 'Cable Machine',
        description: 'Pull bar down to upper chest'
      },
      {
        name: 'Deadlifts',
        sets: '4 sets',
        reps: '5-8 reps',
        difficulty: 'Advanced',
        equipment: 'Barbell',
        description: 'Lift bar from ground to standing position'
      }
    ],
    transformation: {
      beginner: 'Focus on lat pulldowns and cable rows',
      intermediate: 'Add pull-ups and barbell rows',
      advanced: 'Heavy deadlifts and weighted pull-ups'
    }
  },
  
  calves: {
    id: 'calves',
    name: 'Calves',
    scientificName: 'Gastrocnemius',
    position: { x: 0.12, y: -0.8, z: 0.08 },
    color: '#A29BFE',
    description: 'The gastrocnemius is the larger calf muscle, forming the bulge visible beneath the skin.',
    functions: [
      'Plantarflexion of foot',
      'Knee flexion',
      'Propulsion during walking'
    ],
    exercises: [
      {
        name: 'Standing Calf Raises',
        sets: '4 sets',
        reps: '15-20 reps',
        difficulty: 'Beginner',
        equipment: 'Calf Raise Machine',
        description: 'Raise up on toes, lower slowly'
      },
      {
        name: 'Seated Calf Raises',
        sets: '3 sets',
        reps: '15-20 reps',
        difficulty: 'Beginner',
        equipment: 'Seated Calf Machine',
        description: 'Raise heels from seated position'
      },
      {
        name: 'Jump Rope',
        sets: '3 sets',
        reps: '1-2 min',
        difficulty: 'Beginner',
        equipment: 'Jump Rope',
        description: 'Continuous jumping for calf endurance'
      },
      {
        name: 'Box Jumps',
        sets: '3 sets',
        reps: '10-15 reps',
        difficulty: 'Intermediate',
        equipment: 'Plyo Box',
        description: 'Explosive jumps onto elevated surface'
      }
    ],
    transformation: {
      beginner: 'High volume calf raises with bodyweight',
      intermediate: 'Add weight and vary foot positions',
      advanced: 'Heavy weighted raises and plyometric work'
    }
  }
};

export const getAllMuscles = () => Object.values(muscleData);
export const getMuscleById = (id) => muscleData[id];
