import React from "react";

type Props = { size?: number };

const Loading: React.FC<Props> = ({ size = 28 }) => {
  return (
    <div role="status" className="flex items-center justify-center">
      <svg
        style={{ width: size, height: size }}
        className="animate-spin text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8z"
        ></path>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
