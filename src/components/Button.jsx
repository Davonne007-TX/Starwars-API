import React from "react";

export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mb-10 mt-10 lg:mt-20 bg-black p-2 rounded-full font-audio text-white hover:underline"
    >
      {label}
    </button>
  );
}
