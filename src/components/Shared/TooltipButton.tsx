import type { ReactNode } from "react";

interface TooltipButtonProps {
  icon: ReactNode;
  tooltip: string;
  onClick: () => void;
}

function TooltipButton({ icon, tooltip, onClick }: TooltipButtonProps) {
  return (
    <button className="relative group p-2 bg-white rounded hover:bg-neutral-300 transition-colors"
      onClick={onClick}
    >
      {icon}
      <span className="absolute px-2 py-1 bg-card-foreground text-white bottom-full left-1/2 -translate-x-1/2 translate-y-1 text-xs 
        rounded whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all 
        duration-200 pointer-events-none">
        {tooltip}
      </span>
    </button>
  );
}

export default TooltipButton;
