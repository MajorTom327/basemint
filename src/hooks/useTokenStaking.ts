import { Duration, DateTime } from "luxon";
import { useEffect, useState } from "react";
import { StackingBuds } from "../types/Buds";

export const useTokenStaking = (token: StackingBuds) => {
  const { currentStakeTimestamp } = token;
  const [stakingTime, setStakingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = DateTime.local().toUnixInteger();
      const time = now - currentStakeTimestamp;
      setStakingTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentStakeTimestamp]);


  return {
    duration: Duration.fromObject({ seconds: stakingTime }).toFormat("d 'days' hh:mm:ss"),
    stakingTime
  };
}
