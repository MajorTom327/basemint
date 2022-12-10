import React from "react";
import SupplyCard from "../components/SupplyCard";

type Props = {};

export const Supply: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="w-2/3">
        <SupplyCard />
      </div>
    </>
  );
};

Supply.defaultProps = {};

export default Supply;
