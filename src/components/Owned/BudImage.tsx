import React from "react";
import classnames from "classnames";
import { useBud } from "../../hooks/useBud";

type Props = {
  budId: number;
  hasPower: boolean;
};

export const BudImage: React.FC<Props> = ({ budId }) => {
  const buds = useBud(budId, hasPower);

  const classes = classnames(
    "w-32 h-32 rounded-xl drop-shadow-xl  transition-all",
    "group-hover:drop-shadow-2xl transform group-hover:scale-150 group-hover:z-10 group-hover:-translate-y-8"
  );

  return (
    <>
      <img src={buds.image} className={classes} />
    </>
  );
};

BudImage.defaultProps = {};

export default BudImage;
