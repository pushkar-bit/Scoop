import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function BackButton() {
    const navigate = useNavigate();

    return (
        <Button
            onClick={() => navigate("/")}
            className="group relative overflow-hidden bg-white/10 hover:bg-white/15 text-white border-white/20"
        >
            <span className="w-20 translate-x-2 transition-opacity duration-500 group-hover:opacity-0">
                Back
            </span>
            <i className="absolute inset-0 z-10 grid w-1/4 place-items-center bg-white/20 transition-all duration-500 group-hover:w-full not-italic">
                <ArrowLeft
                    className="opacity-60"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                />
            </i>
        </Button>
    );
}
