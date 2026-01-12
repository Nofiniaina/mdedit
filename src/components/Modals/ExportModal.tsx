import { IconCode, IconFile, IconFileDescription, IconX, type ReactNode } from "@tabler/icons-react";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ButtonActionProps {
  icon: ReactNode;
  filetype: string;
  descri: string;
}

const exportType = [
  { filetype: "Markdown (.md)", descri: "Plain markdown file", icon: <IconFile />, },
  { filetype: "HTML (.html)", descri: "Styled web page", icon: <IconCode />, },
  { filetype: "PDF (.pdf)", descri: "Print ready document", icon: <IconFileDescription />, },
  { filetype: "Word (.docx)", descri: "Microsoft word document", icon: <IconFileDescription />, },
];

function ButtonAction({ icon, filetype, descri }: ButtonActionProps) {
  return (
    <button className="w-full flex items-center gap-3 p-3 border border-neutral-400 
      rounded hover:bg-blue-light hover:border-blue-primary transition-colors group"
    >
      <span className="w-6 h-6 text-neutral-600 group-hover:text-blue-primary">
        {icon}
      </span>
      <div className="text-left">
        <p className="font-medium text-neutral-900">{filetype}</p>
        <p className="text-xs text-neutral-600">{descri}</p>
      </div>
    </button>

  );
}

function ExportModal({ isOpen, onClose }: ExportModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">

      <div className="fixed inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      <div className="min-h-screen p-4 flex justify-center items-center">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md">
          {/* Header */}
          <div className="px-6 py-4 border-b border-neutral-400">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-neutral-900">Export Document</h2>
              <button className="text-neutral-600 hover:text-neutral-900 cursor-pointer"
                onClick={onClose}
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <p className="mb-4 text-sm text-neutral-700">Choose export format:</p>
            <div className="space-y-2">
              {exportType.map(({ icon, filetype, descri }) => (
                <ButtonAction key={filetype} icon={icon} filetype={filetype} descri={descri} />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-neutral-400 bg-neutral-100">
            <button className="w-full px-4 py-2 text-sm text-neutral-700 border border-neutral-400 
              rounded hover:bg-neutral-200 transition-colors cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportModal;
