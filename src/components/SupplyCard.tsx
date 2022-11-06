import React from "react";
import { useSupply } from "../hooks/useSupply";
import Card from "./Card";

type Props = {};

export const SupplyCard: React.FC<Props> = ({}) => {
  const { supply, vfp, total } = useSupply();
  return (
    <Card>
      <h1 className="text-4xl font-bold">Total Supply</h1>
      <h2 className="text-2xl font-bold">
        {supply === 0 ? "-" : supply + vfp} / {total} Buds
      </h2>

      <div className="rounded-xl w-full h-4 overflow-hidden bg-white bg-opacity-25 mt-4 flex justify-start drop-shadow-2xl">
        <div
          className="bg-orange-500 h-full transform -skew-x-12 z-20"
          style={{ width: `${(vfp / total) * 100}%` }}
        ></div>
        <div
          className="bg-green-500 h-full rounded-r-xl z-10"
          style={{ width: `${(supply / total) * 100}%` }}
        ></div>
      </div>
    </Card>
  );
};

SupplyCard.defaultProps = {};

export default SupplyCard;
