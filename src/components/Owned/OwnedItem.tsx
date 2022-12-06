import { Duration } from 'luxon';
import React, { useEffect } from 'react';
import { useBud } from "../../hooks/useBud";
import { useTokenStaking } from "../../hooks/useTokenStaking";
import { StackingBuds } from "../../types/Buds";
import { contractAddress } from "../../eth";
import Card from "../Card";
import BudImage from "./BudImage";

type Props = {
  token: StackingBuds;
};

export const OwnedItem: React.FC<Props> = ({ token }) => {
  const { id, currentStakeTimestamp, totalStakeTimeAccrued } = token;
  const { duration: stakingDuration, stakingTime } = useTokenStaking(token);
  // const bud = useBud(id);
  const isStaking = currentStakeTimestamp !== 0;
  const powerDuration = Duration.fromObject({ days: 30 }).as("seconds");
  const captainDuration = Duration.fromObject({ days: 45 }).as("seconds");

  const isPowerStaking = stakingTime < powerDuration;
  const currentMax = isPowerStaking ? powerDuration : captainDuration;

  const stakingPercent = stakingTime / currentMax;

  const [showPercent, setShowPercent] = React.useState(true);

  const toGo = Duration.fromObject({
    seconds: currentMax - stakingTime,
  }).toFormat("d 'days' hh:mm:ss");

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPercent((v) => !v);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <a
        target="_blank"
        href={`https://opensea.io/fr/assets/ethereum/${contractAddress}/${id}`}
      >
        <Card className="group">
          <div className="flex flex-col items-center">
            <BudImage budId={id} />
            <h1 className="text-2xl font-semibold">{id}</h1>
            {isStaking && <h2 className="text-xl font-semibold">Staking...</h2>}
            {totalStakeTimeAccrued > 0 && stakingDuration}

            {currentMax - stakingTime > 0 && (
              <div className="relative w-full rounded-lg flex overflow-hidden bg-slate-300/30 mt-4">
                <div
                  className={"h-4 bg-green-600 rounded-lg"}
                  style={{ width: `${stakingPercent * 100}%` }}
                ></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 text-xs">
                  {showPercent ? `${(stakingPercent * 100).toFixed(0)}%` : toGo}
                </div>
              </div>
            )}
          </div>
        </Card>
      </a>
    </>
  );
};

OwnedItem.defaultProps = {
};

export default OwnedItem;
