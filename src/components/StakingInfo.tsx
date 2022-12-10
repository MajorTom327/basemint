import React from "react";
import { StackingBuds } from "../types/Buds";
import { Card } from "./Card";

type Props = {
  bud: StackingBuds;
};

export const StakingInfo: React.FC<Props> = ({ bud }) => {
  const isStaking = bud.currentStakeTimestamp !== 0;
  return (
    <>
      <Card>
        {isStaking && (
          <div className="flex p-4 rounded-lg justify-center text-2xl font-semibold">
            The bud is in the gym
          </div>
        )}
        {!isStaking && (
          <div className="flex p-4 rounded-lg justify-center text-2xl font-semibold">
            Not currently staking
          </div>
        )}
      </Card>
    </>
  );
};

StakingInfo.defaultProps = {};

export default StakingInfo;
