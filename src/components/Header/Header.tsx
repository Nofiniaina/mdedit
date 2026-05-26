import { IconFileFilled } from "@tabler/icons-react";
import Status from "./Status";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ExportsContent from "../Modals/ExportsContent";

function Header() {

  return (
    <>
      <header
        className="flex justify-between items-center px-6 py-3
      bg-background border-b border-border transition-colors duration-150"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IconFileFilled className="w-8 h-8 text-primary" />
            <Input
              className="border-transparent shadow-none bg-transparent"
              value="Untitled.md"
            />
          </div>
          <Status />
        </div>
        <div className="flex gap-3 text-sm font-medium">
          <Dialog>
            <DialogTrigger>
              <Button variant="outline" size="lg">
                Export
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Export Document</DialogTitle>
              </DialogHeader>
              <ExportsContent />
              <DialogFooter>
                <DialogClose>
                  <Button size="lg">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button size="lg">Share</Button>
        </div>
      </header>
    </>
  );
}

export default Header;
