"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navMenus } from "@/config/app";

export function NavSidebar() {
  const [open, setOpen] = useState(false);

  function onOpen() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }
  return (
    <>
      <button className="md:hidden" onClick={onOpen}>
        <Menu />
      </button>

      {open ? (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[999] flex h-screen w-screen flex-col bg-white p-6">
          <button className="ml-auto" onClick={onClose}>
            <X />
          </button>
          <ul className="items-center space-y-4 ">
            {navMenus.map(({ name }, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
