import { useNavigate, useParams } from "react-router-dom";
import { MUSCLES } from "../data/muscles";
import { BackButton } from "../components/BackButton";
import "../styles/Exercises.css";

// Sample data structure for the database-driven exercises
const EXERCISES_DB = [
    {
        id: "1",
        muscle_group: "chest",
        subcategory: "Middle",
        training_type: "Bodybuilding",
        name: "Bench Press",
        difficulty: "Intermediate",
        equipment: "Barbell",
        notes: "Keep your feet flat on the ground and maintain a slight arch in your lower back."
    },
    {
        id: "2",
        muscle_group: "chest",
        subcategory: "Lower",
        training_type: "Bodyweight",
        name: "Dips",
        difficulty: "Advanced",
        equipment: "Dip Station",
        notes: "Lean forward to emphasize the chest more than the triceps."
    },
    {
        id: "3",
        muscle_group: "upperlegs",
        subcategory: "Lower",
        training_type: "Powerlifting",
        name: "Squats",
        difficulty: "Advanced",
        equipment: "Barbell",
        notes: "Focus on depth and keeping your chest up."
    },
    // Add more as needed
];

export default function Exercises() {
    const { muscle } = useParams();
    const navigate = useNavigate();
    const muscleInfo = MUSCLES[muscle as keyof typeof MUSCLES];

    const exercises = EXERCISES_DB.filter(ex => ex.muscle_group === muscle);

    // Group exercises by training_type or subcategory as requested
    const categories = ["Bodyweight", "Calisthenics", "Bodybuilding", "Powerlifting"];

    return (
        <div className="exercises-container">
            <div className="top-actions">
                <BackButton />
            </div>
            <header className="exercises-header">
                <h1 className="muscle-title">
                    {muscleInfo?.label || muscle}
                    <span className="title-accent"> EXERCISES</span>
                </h1>
                <p className="muscle-count">{exercises.length} exercises found</p>
            </header>

            <div className="categories-grid">
                {categories.map(cat => {
                    const catExercises = exercises.filter(ex => ex.training_type === cat);
                    if (catExercises.length === 0) return null;

                    return (
                        <section key={cat} className="category-section">
                            <h2 className="category-title">{cat}</h2>
                            <div className="exercises-list">
                                {catExercises.map(ex => (
                                    <div key={ex.id} className="exercise-card glass-card">
                                        <div className="exercise-info">
                                            <h3>{ex.name}</h3>
                                            <div className="exercise-badges">
                                                <span className="badge difficulty">{ex.difficulty}</span>
                                                <span className="badge equipment">{ex.equipment}</span>
                                                {ex.subcategory && <span className="badge subcat">{ex.subcategory}</span>}
                                            </div>
                                            <p className="trainer-notes"><strong>Note:</strong> {ex.notes}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>

            {exercises.length === 0 && (
                <div className="no-exercises">
                    <p>No exercises listed for this muscle group yet. Stay tuned!</p>
                </div>
            )}
        </div>
    );
}
