import React from "react";
import { useBud } from "../../hooks/useBud";

type Props = {
  budId: number;
};

export const BudImage: React.FC<Props> = ({ budId }) => {
  const buds = useBud(budId);

  return (
    <>
      <img src={buds.image} className="w-48 h-48 rounded-xl drop-shadow-xl" />
    </>
  );
};

BudImage.defaultProps = {};

export default BudImage;