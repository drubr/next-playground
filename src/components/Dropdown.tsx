import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Dropdown({
  data,
}: {
  data: {
    key: string;
    value: string;
  }[];
}) {
  const [show, setShow] = useState(false);
  const [option, setOption] = useState({
    key: data[0].key,
    value: data[0].value,
  });

  useEffect(() => setShow(false), [option]);

  return (
    <div className="grid gap-4">
      <header
        className="flex cursor-pointer select-none flex-wrap items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3 pl-6"
        onClick={() => setShow((prevState) => !prevState)}
      >
        {option.value}
        <ChevronRightIcon
          className={`h-5 w-5 ${show ? "rotate-0" : "rotate-90"}`}
        />
      </header>
      <div
        className={`grid gap-4 transition-all ${
          show
            ? "visible h-full translate-y-0 opacity-100"
            : "invisible h-0 translate-y-4 opacity-0"
        }`}
      >
        <ul className="rounded-2xl bg-white p-2">
          {data.map((dropdown, index) => (
            <li
              key={index}
              className="cursor-pointer rounded-xl bg-white px-4 py-3 transition hover:bg-violet-200"
              onClick={() => setOption(dropdown)}
            >
              {dropdown.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
