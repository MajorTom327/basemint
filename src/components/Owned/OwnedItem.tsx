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
      <Card className="group">
        <div className="flex flex-col items-center">
          <BudImage budId={id} />
          <a
            className="text-2xl font-semibold"
            href={`https://opensea.io/fr/assets/ethereum/0xbe44b56bf60b5ee6141345c2b1380bea2915d991/${id}`}
          >
            {id}
          </a>
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
