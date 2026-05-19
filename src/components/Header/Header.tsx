import { IconFileFilled } from "@tabler/icons-react";
import Status from "./Status";
import { useState } from "react";
import ExportModal from "../Modals/ExportModal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Header() {
  const [showExportModal, setShowExportModal] = useState(false);

  return (
    <>
      <header
        className="flex justify-between items-center px-6 py-3
      bg-background border-b border-border transition-colors duration-150"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IconFileFilled className="w-8 h-8 text-primary" />
            <Input className="border-transparent shadow-none bg-transparent"
              value="Untitled.md"
            />
          </div>
          <Status />
        </div>
        <div className="flex gap-3 text-sm font-medium">
          {/*<button
            className="px-4 py-2 text-neutral-700 hover:bg-neutral-200 rounded"
            onClick={() => setShowExportModal(true)}
          >
            Export
          </button>*/}
          <Button variant="outline" size="lg">
            Export
          </Button>
          {/*<button className="px-4 py-2 bg-blue-primary text-white hover:bg-blue-hover rounded shadow-sm">
            Share
          </button>*/}
          <Button size="lg">Share</Button>
        </div>
      </header>

      <ExportModal
        isOpen={showExportModal}
        onClose={() => {
          setShowExportModal(false);
        }}
      />
    </>
  );
}

export default Header;
