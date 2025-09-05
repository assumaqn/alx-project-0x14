import React from "react";

interface Props {
  label?: string;
  onClick?: () => void;
  className?: string;
}

const LayoutButton: React.FC<Props> = ({
  label = "Action",
  onClick,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded ${className}`}
  >
    {label}
  </button>
);

export default LayoutButton;
