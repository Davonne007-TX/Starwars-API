import React from "react";

export default function Button({ label, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}
