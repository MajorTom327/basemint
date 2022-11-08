import { Duration } from 'luxon';
import React, { useEffect } from 'react';
import { useBud } from "../../hooks/useBud";
import { useTokenStaking } from "../../hooks/useTokenStaking";
import { StackingBuds } from "../../types/Buds";
import Card from "../Card";
import BudImage from "./BudImage";

type Props = {
  token: StackingBuds;
};

export const OwnedItem: React.FC<Props> = ({ token }) => {
  const { id, currentStakeTimestamp, totalStakeTimeAccrued } = token;
  const stakingDuration = useTokenStaking(token);
  const bud = useBud(id);
  const isStaking = currentStakeTimestamp !== 0;

  return (
    <>
      <Card>
        <div className="flex flex-col items-center">
          <BudImage budId={id} />
          <h1 className="text-2xl font-semibold">{id}</h1>
          {isStaking && <h2 className="text-xl font-semibold">Staking...</h2>}
          {totalStakeTimeAccrued > 0 && stakingDuration}
        </div>
      </Card>
    </>
  );
};

OwnedItem.defaultProps = {
};

export default OwnedItem;
