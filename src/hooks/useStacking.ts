import { useEffect, useState } from "react";
import eth from "../eth";
import { DateTime } from 'luxon'

export const useStacking = () => {
  const [stackingStart, setStackingStart] = useState(DateTime.local());

  useEffect(() => {
    eth.stackingStart().then((stakingStartingTimestamp) => {
      setStackingStart(
        DateTime.fromSeconds(parseInt(stakingStartingTimestamp))
      );
    });
  }, []);

  const stackTokens = async (tokens: number[]) => {
    console.log("stacking tokens", tokens);

    eth.stack(tokens).then((result) => {
      console.log("stacked tokens", result);
    }).catch((error) => {
      console.error("error stacking tokens", error);
    });

  }

  return {
    stackingStart,
    stackTokens
  }
}

export default useStacking;
