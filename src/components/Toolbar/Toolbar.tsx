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
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";

function Toolbar() {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showTablesModal, setShowTablesModal] = useState(false);

  return (
    <>
      <div className="px-6 py-3 flex justify-between border-b border-border
        fade-in transition-colors duration-150 text-muted-foreground">
        <div className="flex gap-4">
          <div className="flex items-center">
            <TooltipButton icon={<IconBold className="w-4 h-4" />} tooltip="Bold" onClick={() => { }} />
            <TooltipButton icon={<IconItalic className="w-4 h-4" />} tooltip="Italic" onClick={() => { }} />
            <TooltipButton icon={<IconStrikethrough className="w-4 h-4" />} tooltip="Strikethrough" onClick={() => { }} />

          </div>

          <div className="flex">
            <TooltipButton icon={<IconH1 className="w-4 h-4" />} tooltip="H1" onClick={() => { }} />
            <TooltipButton icon={<IconH2 className="w-4 h-4" />} tooltip="H2" onClick={() => { }} />
            <TooltipButton icon={<IconH3 className="w-4 h-4" />} tooltip="H3" onClick={() => { }} />
          </div>

          <div className="flex">
            <TooltipButton icon={<IconList className="w-4 h-4" />} tooltip="List" onClick={() => { }} />
            <TooltipButton icon={<IconListNumbers className="w-4 h-4" />} tooltip="List numbers" onClick={() => { }} />
            <TooltipButton icon={<IconListCheck className="w-4 h-4" />} tooltip="List check" onClick={() => { }} />
            <TooltipButton icon={<IconBlockquote className="w-4 h-4" />} tooltip="Blockquote" onClick={() => { }} />
          </div>

          <div className="flex">
            <TooltipButton icon={<IconCode className="w-4 h-4" />} tooltip="Inline code" onClick={() => { }} />
            <TooltipButton icon={<IconCodeDots className="w-4 h-4" />} tooltip="Code blocks" onClick={() => { }} />
            <TooltipButton icon={<IconTerminal2 className="w-4 h-4" />} tooltip="Terminal command" onClick={() => { }} />
          </div>

          <div className="flex">
            <TooltipButton icon={<IconLink className="w-4 h-4" />} tooltip="Insert link"
              onClick={() => { setShowLinkModal(true) }}
            />
            <TooltipButton icon={<IconTable className="w-4 h-4" />} tooltip="Insert table"
              onClick={() => { setShowTablesModal(true) }}
            />
          </div>
        </div>

        <div className="flex items-center">
          <ButtonGroup>
            <Button variant="outline">Editor</Button>
            <Button variant="outline">Preview</Button>
          </ButtonGroup>
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
