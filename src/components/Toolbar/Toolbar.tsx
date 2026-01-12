import {
  IconBlockquote, IconBold, IconCode, IconCodeDots,
  IconH1, IconH2, IconH3, IconItalic, IconLink,
  IconList, IconListCheck, IconListNumbers, IconStrikethrough,
  IconTable,
  IconTerminal2
} from "@tabler/icons-react";
import { useState } from "react";
import LinkModal from "../Modals/LinkModal";
import TablesModal from "../Modals/TablesModal";
import TooltipButton from "../Shared/TooltipButton";

function Toolbar() {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showTablesModal, setShowTablesModal] = useState(false);

  return (
    <>
      <div className="px-6 py-3 flex justify-between bg-neutral-100 border-b border-neutral-400
       shadow-sm fade-in transition-colors duration-300 text-neutral-700">
        <div className="flex gap-4">
          <div className="flex items-center">
            <TooltipButton icon={<IconBold className="w-5 h-5" />} tooltip="Bold" onClick={() => { }} />
            <TooltipButton icon={<IconItalic className="w-5 h-5" />} tooltip="Italic" onClick={() => { }} />
            <TooltipButton icon={<IconStrikethrough className="w-5 h-5" />} tooltip="Strikethrough" onClick={() => { }} />

          </div>

          <div className="flex">
            <TooltipButton icon={<IconH1 className="w-5 h-5" />} tooltip="H1" onClick={() => { }} />
            <TooltipButton icon={<IconH2 className="w-5 h-5" />} tooltip="H2" onClick={() => { }} />
            <TooltipButton icon={<IconH3 className="w-5 h-5" />} tooltip="H3" onClick={() => { }} />
          </div>

          <div className="flex">
            <TooltipButton icon={<IconList className="w-5 h-5" />} tooltip="List" onClick={() => { }} />
            <TooltipButton icon={<IconListNumbers className="w-5 h-5" />} tooltip="List numbers" onClick={() => { }} />
            <TooltipButton icon={<IconListCheck className="w-5 h-5" />} tooltip="List check" onClick={() => { }} />
            <TooltipButton icon={<IconBlockquote className="w-5 h-5" />} tooltip="Blockquote" onClick={() => { }} />
          </div>

          <div className="flex">
            <TooltipButton icon={<IconCode className="w-5 h-5" />} tooltip="Inline code" onClick={() => { }} />
            <TooltipButton icon={<IconCodeDots className="w-5 h-5" />} tooltip="Code blocks" onClick={() => { }} />
            <TooltipButton icon={<IconTerminal2 className="w-5 h-5" />} tooltip="Terminal command" onClick={() => { }} />
          </div>

          <div className="flex">
            <TooltipButton icon={<IconLink className="w-5 h-5" />} tooltip="Insert link"
              onClick={() => { setShowLinkModal(true) }}
            />
            <TooltipButton icon={<IconTable className="w-5 h-5" />} tooltip="Insert table"
              onClick={() => { setShowTablesModal(true) }}
            />
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

      <TablesModal
        isOpen={showTablesModal}
        onClose={() => { setShowTablesModal(false) }}
      />
    </>
  );
}

export default Toolbar;
