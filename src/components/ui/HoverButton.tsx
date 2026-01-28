import React, { useRef, useState, MouseEvent, ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    glowColor?: string;
    backgroundColor?: string;
    textColor?: string;
    hoverTextColor?: string;
}

const HoverButton: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = '',
    disabled = false,
    glowColor = '#00ffc3',
    backgroundColor = '#111827',
    textColor = '#ffffff',
    hoverTextColor = '#67e8f9'
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setGlowPosition({ x, y });
        }
    };

    return (
        <button
            ref={buttonRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative px-8 py-4 rounded-lg ${className}`}
            style={{
                backgroundColor,
                color: isHovered ? hoverTextColor : textColor
            }}
        >
            <span className="relative z-10">{children}</span>
        </button>
    );
};

export { HoverButton };
