"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[640px] bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl z-50 p-2"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
    >
      <VisuallyHidden.Root>
        <Dialog.Title>Command Menu</Dialog.Title>
      </VisuallyHidden.Root>
      <Command.Input
        placeholder="Type a command or search..."
        className="w-full bg-transparent border-none outline-none text-neutral-200 placeholder:text-neutral-500 p-3 text-lg border-b border-neutral-800 mb-2"
      />
      <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
        <Command.Empty className="text-neutral-500 text-center py-4">
          No results found.
        </Command.Empty>

        <Command.Group
          heading="Socials"
          className="text-neutral-500 text-xs font-medium mb-2 px-2"
        >
          <Command.Item
            onSelect={() =>
              runCommand(() =>
                window.open("https://github.com/nissha29", "_blank")
              )
            }
            className="flex items-center gap-2 px-3 py-2 text-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-900 aria-selected:bg-neutral-900 transition-colors"
          >
            <SiGithub className="w-4 h-4" />
            <span>GitHub</span>
          </Command.Item>
          <Command.Item
            onSelect={() =>
              runCommand(() =>
                window.open(
                  "https://linkedin.com/in/nisha-yadav-698329230",
                  "_blank"
                )
              )
            }
            className="flex items-center gap-2 px-3 py-2 text-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-900 aria-selected:bg-neutral-900 transition-colors"
          >
            <SiLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </Command.Item>
          <Command.Item
            onSelect={() =>
              runCommand(() =>
                window.open("https://twitter.com/nissha29", "_blank")
              )
            }
            className="flex items-center gap-2 px-3 py-2 text-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-900 aria-selected:bg-neutral-900 transition-colors"
          >
            <SiX className="w-4 h-4" />
            <span>Twitter / X</span>
          </Command.Item>
        </Command.Group>

        <Command.Group
          heading="General"
          className="text-neutral-500 text-xs font-medium mb-2 px-2 mt-4"
        >
          <Command.Item
            onSelect={() =>
              runCommand(() =>
                window.open("mailto:nishakashyap2907@gmail.com", "_blank")
              )
            }
            className="flex items-center gap-2 px-3 py-2 text-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-900 aria-selected:bg-neutral-900 transition-colors"
          >
            <HiOutlineMail className="w-4 h-4" />
            <span>Send Email</span>
          </Command.Item>
          <Command.Item
            onSelect={() =>
              runCommand(() =>
                window.open(
                  "https://drive.google.com/file/d/1GVkSrQD9xI5eRYuEozabgbD3nUP0bmyI/view?usp=sharing",
                  "_blank"
                )
              )
            }
            className="flex items-center gap-2 px-3 py-2 text-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-900 aria-selected:bg-neutral-900 transition-colors"
          >
            <HiOutlineDocumentText className="w-4 h-4" />
            <span>View Resume</span>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
