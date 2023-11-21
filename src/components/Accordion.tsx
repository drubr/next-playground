import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function Accordion({
  link,
  linkHref,
  title,
  children,
}: {
  link: string;
  linkHref: string;
  title: string;
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(true);
  return (
    <div className="grid gap-8">
      <header className="grid select-none gap-0.5">
        <Link href={linkHref} className="text-violet-400" target="_blank">
          {link}
        </Link>
        <div
          className="flex cursor-pointer flex-wrap justify-between gap-4"
          onClick={() => setShow((prevState) => !prevState)}
        >
          <h1 className="text-left text-xl">{title}</h1>
          <ChevronRightIcon
            className={`h-5 w-5 ${show ? "rotate-0" : "rotate-90"}`}
          />
        </div>
      </header>
      <div
        className={`grid gap-4 transition-all ${
          show
            ? "visible h-full translate-y-0 opacity-100"
            : "invisible h-0 translate-y-4 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
