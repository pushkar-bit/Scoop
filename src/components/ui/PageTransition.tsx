import React from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                rotateX: 20,
                scale: 0.95,
            }}
            animate={{
                opacity: 1,
                rotateX: 0,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                rotateX: -20, // Rotating away for a more cinematic feel on exit
                scale: 0.95,
            }}
            transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1], // Cinematic cubic-bezier easing
            }}
            style={{
                perspective: "1200px",
                transformOrigin: "center top",
                width: "100%",
                minHeight: "100vh",
            }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
