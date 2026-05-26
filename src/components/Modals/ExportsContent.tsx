import { IconCode, IconFile, IconFileDescription, type ReactNode } from "@tabler/icons-react";

const exportType = [
  { filetype: "Markdown (.md)", descri: "Plain markdown file", icon: <IconFile />, },
  { filetype: "HTML (.html)", descri: "Styled web page", icon: <IconCode />, },
  { filetype: "PDF (.pdf)", descri: "Print ready document", icon: <IconFileDescription />, },
  { filetype: "Word (.docx)", descri: "Microsoft word document", icon: <IconFileDescription />, },
];

interface ButtonActionProps {
  icon: ReactNode;
  filetype: string;
  descri: string;
}

function ButtonAction({ icon, filetype, descri }: ButtonActionProps) {
  return (
    <button className="w-full flex items-center gap-3 p-3 border border-border 
      rounded hover:bg-primary-foreground hover:border-primary transition-colors group cursor-pointer"
    >
      <span className="w-6 h-6 group-hover:text-primary">
        {icon}
      </span>
      <div className="text-left">
        <p className="font-medium">{filetype}</p>
        <p className="text-xs text-muted-foreground">{descri}</p>
      </div>
    </button>

  );
}

function ExportsContent() {
  return (
    <div>
      <p className="mb-4">Choose export format:</p>
      <div className="space-y-2">
        {exportType.map(({ icon, filetype, descri }) => (
          <ButtonAction key={filetype} icon={icon} filetype={filetype} descri={descri} />
        ))}
      </div>
    </div>
  );
}

export default ExportsContent;
