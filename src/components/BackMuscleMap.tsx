import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MuscleTiltCard from "./MuscleTiltCard";
import { HoverButton } from "./ui/HoverButton";
import "../styles/muscleMap.css";

/**
 * Back Muscle Map Geometry
 * Dimensions: 366 x 398
 */
const SVG_VIEWBOX = "0 0 366 398";

const BACK_MUSCLE_PATHS = [
    // Traps (Red)
    { id: "traps", d: "M176 76L183 84.5L196.5 90L203.5 84.5L194 76L188 73L176 76Z" },
    { id: "traps", d: "M148 82.5L157.5 92.5L173 86.5L176 76L163 73L148 82.5Z" },
    // Upper Back (Orange)
    { id: "upperback", d: "M142.5 106L144.5 115.5H164.5L179 144L197 115.5H212L213.5 105.5L197 91L182.5 84.5H179L162.5 91L142.5 106Z" },
    // Rear Delts (Purple)
    { id: "reardelts", d: "M125.5 109.5V94.5L136 84H146L156 91L125.5 109.5Z" },
    { id: "reardelts", d: "M197.5 91L216.5 106L227.5 109.5L225.5 94.5L216.5 87L205 84L197.5 91Z" },
    // Triceps (White)
    { id: "triceps", d: "M120 132L126 112.5L142 105.5V125.5L131.5 138.5L120 132Z" },
    { id: "triceps", d: "M220 138.5L232.5 135V120L226 110.5L214.5 105.5L211.5 125.5L220 138.5Z" },
    // Forearms (Dark Blue/Purple)
    { id: "forearms", d: "M223 141.5L236.5 136L243 151.5L250 185.5H243L225 159.5L223 141.5Z" },
    { id: "forearms", d: "M119 136L132 141.5L128.5 156.5L108 185.5L100 182.5L108 151.5L119 136Z" },
    // Lats (Yellow)
    { id: "lats", d: "M182 143L195 160.5L200.5 150.5L209 126V118.5H200.5L182 143Z" },
    { id: "lats", d: "M145 118.5H164L178.5 143L161 160.5L150.5 148L145 126V118.5Z" },
    // Lower Back (Light Green)
    { id: "lowerback", d: "M147.5 166L178 177.5L205 168L194 163L180 144.5L160 163L147.5 166Z" },
    // Core (Dark Green)
    { id: "core", d: "M196 161.5L202.5 150.5L204 165L196 161.5Z" },
    { id: "core", d: "M149.5 150.5L146.5 165L161 161.5L149.5 150.5Z" },
    // Glutes (Light Blue)
    { id: "glutes", d: "M147.5 170L139 203L147.5 218L176.5 206L205 218L210.5 203L203 170L176.5 178.5L147.5 170Z" },
    // Hamstrings (Black)
    { id: "hamstrings", d: "M179 208L184.5 279L194.5 268.5L204 279L210.5 208L206.5 219.5L179 208Z" },
    { id: "hamstrings", d: "M138.5 208L142 247.5L147.5 274L157 268.5L168.5 279V263.5L175.5 208L150 219.5L138.5 208Z" },
    // Calves (Skin Tone - mapped to lowerlegs)
    { id: "lowerlegs", d: "M159.5 271L150 278.5L143.5 296.5L152.5 316.5H169V296.5L165 278.5L159.5 271Z" },
    { id: "lowerlegs", d: "M194 271L187 278.5L183 296.5L187 316.5H203L206 296.5L203 278.5L194 271Z" },
];

export default function BackMuscleMap() {
    const [activeMuscle, setActiveMuscle] = useState<string | null>(null);
    const [anchor, setAnchor] = useState<{ x: number; y: number } | null>(null);
    const navigate = useNavigate();

    const handleMouseEnter = (e: React.MouseEvent, muscleId: string) => {
        setActiveMuscle(muscleId);
        setAnchor({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (activeMuscle) {
            setAnchor({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseLeave = () => {
        setActiveMuscle(null);
        setAnchor(null);
    };

    const handleClick = (e: React.MouseEvent, muscleId: string) => {
        e.stopPropagation();
        navigate(`/exercises/${muscleId}`);
    };

    useEffect(() => {
        window.addEventListener("resize", handleMouseLeave);
        return () => window.removeEventListener("resize", handleMouseLeave);
    }, []);

    return (
        <div className="muscle-map-page" onClick={() => setActiveMuscle(null)}>
            <div
                className="body-scaling-container"
                onMouseMove={handleMouseMove}
                style={{ aspectRatio: "366 / 398", height: "65vh" }}
            >
                {/* PNG Base Image */}
                <img
                    src="/backmuscles.png"
                    className="body-image-base"
                    alt="Back Muscles Visual"
                    draggable={false}
                />

                {/* SVG Overlay */}
                <svg
                    className="body-svg-overlay"
                    viewBox={SVG_VIEWBOX}
                    preserveAspectRatio="xMidYMid meet"
                >
                    {BACK_MUSCLE_PATHS.map((path, idx) => (
                        <path
                            key={`${path.id}-${idx}`}
                            id={path.id}
                            d={path.d}
                            className="muscle-hit-area"
                            onMouseEnter={(e) => handleMouseEnter(e, path.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={(e) => handleClick(e, path.id)}
                        />
                    ))}
                </svg>
            </div>

            <div className="bottom-invitation">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="invitation-text"
                >
                    Focus on your back development
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="back-button-container"
                    style={{ marginTop: '2rem' }}
                >
                    <HoverButton
                        onClick={() => navigate('/')}
                        className="back-button"
                        glowColor="#67e8f9"
                    >
                        Back
                    </HoverButton>
                </motion.div>
            </div>

            {/* Premium Tilt Card */}
            {activeMuscle && anchor && (
                <MuscleTiltCard
                    muscleId={activeMuscle}
                    anchor={anchor}
                    visible={!!activeMuscle}
                    onClick={() => navigate(`/exercises/${activeMuscle}`)}
                />
            )}
        </div>
    );
}
