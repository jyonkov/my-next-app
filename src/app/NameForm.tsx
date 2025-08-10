'use client';
import { useState } from "react";

// Form: Add text input + submit button
export default function NameForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`A name was submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </label>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}