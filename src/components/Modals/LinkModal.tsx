import { IconX } from "@tabler/icons-react";
import type { ModalProps } from "../../types/ModalProps";

function LinkModal({ isOpen, onClose }: ModalProps) {

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
              <h2 className="text-lg font-bold text-neutral-900">Insert link</h2>
              <button className="text-neutral-600 hover:text-neutral-900 cursor-pointer"
                onClick={onClose}
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <div className="mb-4">
              <label htmlFor=""
                className="block text-sm font-medium text-neutral-900 mb-2"
              >
                URL <span className="text-error">*</span>
              </label>
              <input type="url"
                className="w-full px-3 py-2 border border-neutral-400 rounded 
                focus:outline-none focus:ring-2 focus:ring-blue-primary text-sm"
                placeholder="https://example.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor=""
                className="block text-sm font-medium text-neutral-900 mb-2"
              >
                Link text <span className="text-neutral-600">(optional)</span>
              </label>
              <input type="text"
                className="w-full px-3 py-2 border border-neutral-400 rounded 
                focus:outline-none focus:ring-2 focus:ring-blue-primary text-sm"
                placeholder="Link description"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t flex justify-end gap-2 border-neutral-400 bg-neutral-100">
            <button className="px-4 py-2 text-sm text-neutral-700 border border-neutral-400 
              rounded hover:bg-neutral-200 transition-colors cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="px-4 py-2 text-sm bg-blue-primary text-white rounded hover:bg-blue-hover transition-colors">
              Insert link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkModal;
