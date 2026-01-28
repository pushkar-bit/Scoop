import React from "react";
import { Tilt } from "./ui/Tilt";
import { MUSCLES } from "../data/muscles";
import { muscleData } from "../data/muscleData";
import { motion, AnimatePresence } from "framer-motion";

interface MuscleTiltCardProps {
    muscleId: string;
    anchor: { x: number; y: number };
    visible: boolean;
    onClose?: () => void;
    onClick?: () => void;
}

export default function MuscleTiltCard({
    muscleId,
    anchor,
    visible,
    onClick
}: MuscleTiltCardProps) {
    const basicData = MUSCLES[muscleId as keyof typeof MUSCLES];

    const muscleIdMap: Record<string, string> = {
        neckandtraps: "neck",
        shoulders: "shoulders",
        biceps: "biceps",
        triceps: "triceps",
        forearms: "forearms",
        chest: "chest",
        core: "abs",
        upperlegs: "quads",
        lowerlegs: "calves",
        traps: "traps",
        upperback: "upperback",
        reardelts: "reardelts",
        lats: "lats",
        lowerback: "lowerback",
        glutes: "glutes",
        hamstrings: "hamstrings",
    };

    const richData = (muscleData as any)[muscleIdMap[muscleId]];
    const label = basicData?.label || richData?.name || muscleId;
    const description = richData?.description || "High-intensity training for maximum growth and definition.";
    const imageSrc = `/muscles/${muscleId}.png`;

    const isLeftSide = anchor.x < window.innerWidth / 2;
    const isBottomHalf = anchor.y > window.innerHeight * 0.7;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.95,
                        x: isLeftSide ? -20 : 20,
                        y: isBottomHalf ? 20 : -20
                    }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    exit={{
                        opacity: 0,
                        scale: 0.95,
                        x: isLeftSide ? -20 : 20,
                        y: isBottomHalf ? 20 : -20
                    }}
                    style={{
                        position: "fixed",
                        left: anchor.x,
                        top: anchor.y,
                        zIndex: 999999,
                        pointerEvents: "none",
                        transform: `translate(${isLeftSide ? '-105%' : '5%'}, ${isBottomHalf ? '-102%' : '0%'})`,
                        padding: "20px"
                    }}
                >
                    <div style={{ pointerEvents: "auto" }}>
                        <Tilt
                            rotationFactor={10}
                            springOptions={{ stiffness: 300, damping: 30 }}
                        >
                            <div
                                className="card-content"
                                onClick={onClick}
                                style={{
                                    background: "rgba(10, 10, 10, 0.92)",
                                    backdropFilter: "blur(25px)",
                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                    borderRadius: "28px",
                                    padding: "20px",
                                    width: "300px",
                                    boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.8)",
                                    cursor: "pointer",
                                    overflow: "hidden",
                                    position: "relative"
                                }}
                            >
                                {/* Glow Effect */}
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    style={{
                                        position: "absolute",
                                        top: "-50%",
                                        left: "-50%",
                                        width: "200%",
                                        height: "200%",
                                        background: "radial-gradient(circle at center, rgba(234, 51, 35, 0.15) 0%, transparent 60%)",
                                        pointerEvents: "none"
                                    }}
                                />

                                <div style={{
                                    width: "100%",
                                    height: "180px",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    marginBottom: "20px",
                                    background: "#000",
                                    border: "1px solid rgba(255, 255, 255, 0.05)"
                                }}>
                                    <img
                                        src={imageSrc}
                                        alt={label}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        onError={(e) => { (e.target as HTMLImageElement).src = "/humanbody.png"; }}
                                    />
                                </div>

                                <div className="text-container">
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                                        <div style={{ width: "4px", height: "20px", background: "#ea3323", borderRadius: "2px" }} />
                                        <h3 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "900", margin: 0, textTransform: "uppercase", letterSpacing: "1.5px" }}>
                                            {label}
                                        </h3>
                                    </div>
                                    <p style={{ color: "#aaa", fontSize: "0.85rem", margin: "0 0 16px 0", lineHeight: "1.5", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                        {description}
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "rgba(234, 51, 35, 0.12)", borderRadius: "16px", border: "1px solid rgba(234, 51, 35, 0.25)" }}>
                                        <span style={{ color: "#ea3323", fontSize: "0.8rem", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.5px" }}>Explore</span>
                                        <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ color: "#ea3323", fontWeight: "bold" }}>→</motion.span>
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic Arrow pointing to Cursor */}
                            <div style={{
                                position: "absolute",
                                top: isBottomHalf ? "95%" : "5%",
                                ...(isLeftSide ? { right: "-6px" } : { left: "-6px" }),
                                transform: "translateY(-50%) rotate(45deg)",
                                width: "12px",
                                height: "12px",
                                background: "rgba(10, 10, 10, 0.95)",
                                borderRight: isLeftSide ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
                                borderTop: isLeftSide ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
                                borderLeft: !isLeftSide ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
                                borderBottom: !isLeftSide ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
                                zIndex: -1
                            }} />
                        </Tilt>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
