import React from "react";

export default function CommandHint() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none border-t border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
            <div className="flex items-center justify-center gap-2 py-2 text-xs text-neutral-300 font-mono">
                <span>Press</span>
                <kbd className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-400 font-sans text-[10px]">
                    Ctrl
                </kbd>
                <span>+</span>
                <kbd className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-400 font-sans text-[10px]">
                    K
                </kbd>
                <span>to open command palette</span>
            </div>
        </div>
    );
}
