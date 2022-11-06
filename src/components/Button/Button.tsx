import React from 'react';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ onClick, children}) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
};

export default Button;
