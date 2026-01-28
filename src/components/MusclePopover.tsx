import { useNavigate } from "react-router-dom";
import { MUSCLES } from "../data/muscles";

interface MusclePopoverProps {
  muscle: string;
  anchor: { x: number; y: number };
}

export default function MusclePopover({ muscle, anchor }: MusclePopoverProps) {
  const navigate = useNavigate();
  const muscleData = MUSCLES[muscle as keyof typeof MUSCLES];

  if (!muscleData) return null;

  return (
    <div
      className="muscle-popover-fixed"
      style={{
        left: anchor.x,
        top: anchor.y,
      }}
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/exercises/${muscle}`);
      }}
    >
      <div className="popover-arrow" />
      <div className="popover-content">
        <h4 className="popover-title">{muscleData.label}</h4>
        <p className="popover-subtitle">View specialized exercises</p>
      </div>
    </div>
  );
}
