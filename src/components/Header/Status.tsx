import { IconCircleCheck } from "@tabler/icons-react";
import { Badge } from "../ui/badge";

function Status() {
  return (
    <div className="flex items-center gap-4">
      <Badge variant="ghost">
        <IconCircleCheck />
        Saved
      </Badge>
    </div>
  );
}

export default Status;
