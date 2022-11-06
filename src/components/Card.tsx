import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="rounded-2xl p-4 text-center drop-shadow-lg w-full bg-white bg-opacity-20 backdrop-blur-md text-white">
      {children}
    </div>
  );
}

Card.defaultProps = {
};

export default Card;
