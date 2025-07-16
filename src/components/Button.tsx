import React from 'react'
 
type ButtonProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
};
const Button = ({ onClick, className, children, disabled, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-[200px] cursor-pointer h-14 font-bold text-white text-lg bg-custom-pink-300 rounded-4xl transition-colors shadow-[0_4px_0_0_rgba(65,118,199,0.3)] ${className}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button