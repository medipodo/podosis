import React from "react";

// Simple lotus + foot mark used as the Podosis brandmark.
const LotusMark = ({ className = "w-8 h-8", color = "#E91E63" }) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <g fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Lotus petals */}
      <path d="M24 8 C20 14, 20 20, 24 24 C28 20, 28 14, 24 8 Z" fill={`${color}22`} />
      <path d="M10 18 C16 18, 21 21, 24 24 C20 24, 14 23, 10 18 Z" fill={`${color}22`} />
      <path d="M38 18 C32 18, 27 21, 24 24 C28 24, 34 23, 38 18 Z" fill={`${color}22`} />
      <path d="M14 14 C18 16, 22 20, 24 24 C21 22, 17 19, 14 14 Z" fill={`${color}33`} />
      <path d="M34 14 C30 16, 26 20, 24 24 C27 22, 31 19, 34 14 Z" fill={`${color}33`} />
      {/* Foot silhouette */}
      <path
        d="M18 28 C16 32, 17 36, 20 38 C22 39, 26 39, 28 38 C31 36, 32 32, 30 28 C28 26, 20 26, 18 28 Z"
        fill={color}
        stroke="none"
      />
      <circle cx="20" cy="27" r="1" fill={color} />
      <circle cx="23" cy="26" r="1" fill={color} />
      <circle cx="26" cy="26" r="1" fill={color} />
      <circle cx="29" cy="27" r="1" fill={color} />
    </g>
  </svg>
);

export default LotusMark;
