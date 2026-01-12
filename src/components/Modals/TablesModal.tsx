import { IconAlignCenter, IconAlignLeft, IconAlignRight, IconX } from "@tabler/icons-react";
import type { ModalProps } from "../../types/ModalProps";
import InputNumber from "../Shared/InputNumber";

function TablesModal({ isOpen, onClose }: ModalProps) {

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
            {/* Size selector */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">
                  Rows
                </label>
                <InputNumber />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-900 mb-2">
                  Columns
                </label>
                <InputNumber />
              </div>
            </div>

            {/* Options */}
            <div className="mb-4 text-sm">
              <label htmlFor=""
                className="block font-medium text-neutral-900 mb-2">
                Options
              </label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox"
                    className="w-4 h-4 text-blue-primary border-neutral-400"
                  />
                  <label htmlFor=""
                    className="text-neutral-700"
                  >
                    Include header row
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox"
                    className="w-4 h-4 text-blue-primary border-neutral-400"
                  />
                  <label htmlFor=""
                    className="text-neutral-700"
                  >
                    Stripped row
                  </label>
                </div>

              </div>
            </div>

            {/* Alignment */}
            <div className="mb-4 text-sm font-medium">
              <label className="block text-neutral-900 mb-2">Text alignment</label>
              <div className="flex gap-2">
                <button className="px-3 py-2 border border-neutral-400 rounded 
                    hover:bg-neutral-200 transition-colors"
                >
                  <IconAlignLeft className="w-5 h-5" />
                </button>
                <button className="px-3 py-2 border border-neutral-400 rounded 
                    hover:bg-neutral-200 transition-colors"
                >
                  <IconAlignCenter className="w-5 h-5" />
                </button>
                <button className="px-3 py-2 border border-neutral-400 rounded 
                    hover:bg-neutral-200 transition-colors"
                >
                  <IconAlignRight className="w-5 h-5" />
                </button>

              </div>
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
              Insert tables
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablesModal;
