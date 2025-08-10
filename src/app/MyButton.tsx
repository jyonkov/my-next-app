'use client';

import { useState } from "react";

type MyButtonProps = {
  label: string;
};

export default function MyButton({ label }: MyButtonProps) {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {label} ({clickCount})
    </button>
  );
}
