import { IconFileFilled } from "@tabler/icons-react";
import Input from "../Shared/Input";
import Status from "./Status";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-3  
      bg-white border-b border-neutral-400 shadow-sm transition-colors duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <IconFileFilled className="w-8 h-8 text-blue-primary" />
          <Input />
        </div>
        <Status />
      </div>
      <div className="flex gap-3 text-sm font-medium">
        <button className="px-4 py-2 text-neutral-700 hover:bg-neutral-200 rounded">
          Export
        </button>
        <button className="px-4 py-2 bg-blue-primary text-white hover:bg-blue-hover rounded shadow-sm">
          Share
        </button>
      </div>
    </header>
  );
}

export default Header;
