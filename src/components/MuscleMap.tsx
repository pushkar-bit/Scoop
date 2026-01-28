import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MuscleTiltCard from "./MuscleTiltCard";
import "../styles/muscleMap.css";

/**
 * STEP 1: FIX VIEWBOX (MANDATORY)
 * Source Geometry trimmed to match PNG (3743 x 8021)
 * Center shifted to align paths with centered body image.
 */
const SVG_WIDTH = 3743;
const SVG_HEIGHT = 8021;
const SVG_VIEWBOX = `1414 0 ${SVG_WIDTH} ${SVG_HEIGHT}`;

const MUSCLE_PATHS = [
  { id: "neckandtraps", d: "M2802.5 1522.5L2950.5 1596.5H3600L3698.5 1522.5L3501.5 1382.5V1128L3403 1267.5H3156L3041 1128V1382.5L2802.5 1522.5Z" },
  { id: "shoulders", d: "M3764.5 1629L3953.5 1563.5L4208.5 1826.5V2081.5L4044 1958L3953.5 1769L3764.5 1629Z" },
  { id: "shoulders", d: "M2293 2081.5V1826.5L2539.5 1563.5L2868.5 1629L2613.5 1769L2539.5 1958L2293 2081.5Z" },
  { id: "biceps", d: "M2194.5 2698L2449.5 2056.5L2531.5 1999L2605.5 2221L2334 2780L2194.5 2698Z" },
  { id: "biceps", d: "M4233 2821L4372.5 2698L4019.5 1999L3961.5 2130.5L4233 2821Z" },
  { id: "triceps", d: "M2120.5 2656.5V2377L2301.5 2171.5L2424.5 2048.5L2153.5 2689.5L2120.5 2656.5Z" },
  { id: "triceps", d: "M2359 2788L2597 2287L2622 2451L2424.5 2788H2359Z" },
  { id: "triceps", d: "M3937 2171.5V2418.5L4159 2846H4225L3937 2171.5Z" },
  { id: "triceps", d: "M4414 2730.5L4035.5 2007.5L4225 2171.5L4331.5 2377L4414 2730.5Z" },
  { id: "forearms", d: "M4126 2862L4364.5 2952.5L4430.5 2665L4594.5 2952.5L4800 3676L4627.5 3799.5L4570 3635L4241 3215.5L4126 2952.5V2862Z" },
  { id: "forearms", d: "M1709.5 3733.5L1939.5 2952.5L2120.5 2665L2400 2862L2334 3150L1939.5 3733.5L1890.5 3824L1709.5 3733.5Z" },
  { id: "chest", d: "M2679 2315.5H3836.5L4027 1879.5L3686.5 1607.5H3291.5H2897L2611 1771L2515.5 1961.5L2679 2315.5Z" },
  { id: "core", d: "M2663 2591L2712.5 2361L3238.5 2319.5H3830L3888 2451L3772.5 2821L3830 3298L3296 3528L2712.5 3347L2778 2952.5L2663 2591Z" },
  { id: "upperlegs", d: "M2687.5 3462.5L2515 4079V4728L2687.5 5385.5L3140 5509L3189 4769L3238.5 4079L2860.5 3462.5H2687.5Z" },
  { id: "upperlegs", d: "M3312.5 4079L3624.5 3536L3797.5 3462.5L3986.5 3906L4044 4079L3986.5 4728L3871.5 5385.5L3427.5 5509L3312.5 4769V4079Z" },
  { id: "lowerlegs", d: "M2638.5 5764V6150L2778 7202.5L3057.5 7251.5V6413L3140 6150L3057.5 5764H2638.5Z" },
  { id: "lowerlegs", d: "M3452 5764L3403 6150L3452 6413V7202.5V7251.5L3789 7202.5L3904 6150L3855 5764H3452Z" },
];

export default function MuscleMap() {
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
      {/* Hero Section removed as requested */}

      {/* Fixed-ratio container controlling both PNG and SVG scale */}
      <div className="body-scaling-container" onMouseMove={handleMouseMove}>
        {/* PNG Base Image - Width auto, height 100% */}
        <img
          src="/humanbody.png"
          className="body-image-base"
          alt="Human Body Visual"
          draggable={false}
        />

        {/* SVG Overlay - Absolute positioned on top */}
        <svg
          className="body-svg-overlay"
          viewBox={SVG_VIEWBOX}
          preserveAspectRatio="xMidYMid meet"
        >
          {MUSCLE_PATHS.map((path, idx) => (
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
          What would u want to train ?
        </motion.h2>
      </div>

      {/* Premium Tilt Card - Outside transformed container to fix positioning */}
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
