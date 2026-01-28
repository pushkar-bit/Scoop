import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HoverButton } from './ui/HoverButton';
import './Home2.css';

const Home2: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="home2-page">
            <div className="home2-content">
                <h1 className="home2-placeholder">Home2 Placeholder</h1>
                <p className="home2-description">This is a completely independent page from the main Home page.</p>

                <div className="button-container">
                    <HoverButton
                        onClick={() => navigate('/')}
                        className="back-button"
                    >
                        Back
                    </HoverButton>
                </div>
            </div>
        </div>
    );
};

export default Home2;
