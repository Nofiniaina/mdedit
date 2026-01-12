import {
  IconBlockquote, IconBold, IconCode, IconCodeDots,
  IconH1, IconH2, IconH3, IconItalic, IconLink,
  IconList, IconListCheck, IconListNumbers, IconStrikethrough,
  IconTable,
  IconTerminal2
} from "@tabler/icons-react";
import { useState } from "react";
import LinkModal from "../Modals/LinkModal";

function Toolbar() {
  const [showLinkModal, setShowLinkModal] = useState(false);

  return (
    <>
      <div className="px-6 py-3 flex justify-between bg-neutral-100 border-b border-neutral-400
       shadow-sm fade-in transition-colors duration-300 text-neutral-700">
        <div className="flex gap-4">
          <div className="flex items-center">
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconBold className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconItalic className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconStrikethrough className="w-5 h-5" />
            </button>
          </div>

          <div className="flex">
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconH1 className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconH2 className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconH3 className="w-5 h-5" />
            </button>
          </div>

          <div className="flex">
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconList className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconListNumbers className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconListCheck className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconBlockquote className="w-5 h-5" />
            </button>
          </div>

          <div className="flex">
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconCode className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconCodeDots className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconTerminal2 className="w-5 h-5" />
            </button>
          </div>

          <div className="flex">
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors"
              onClick={() => { setShowLinkModal(true) }}
            >
              <IconLink className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded hover:bg-neutral-300 transition-colors">
              <IconTable className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex bg-white rounded border border-neutral-400 overflow-hidden 
        text-xs font-medium">
          <button className="px-3 py-1.5 hover:bg-neutral-200 transition-colors">
            Editor
          </button>
          <button className="px-3 py-1.5 hover:bg-neutral-200 transition-colors">
            Split
          </button>
          <button className="px-3 py-1.5 hover:bg-neutral-200 transition-colors">
            Preview
          </button>
        </div>
      </div>

      <LinkModal
        isOpen={showLinkModal}
        onClose={() => { setShowLinkModal(false) }}
      />
    </>
  );
}

export default Toolbar;
