import React from "react";

type buttonprops = {
  text: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const CustomButton: React.FC<buttonprops> = ({
  text,
  className,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={` flex items-center justify-center ${className}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default CustomButton;
