import { useEffect, useState } from "react";
import eth from "../eth";
import { StackingBuds } from "../types/Buds";



export const useOwning = () => {
  const [ownedToken, setOwned] = useState<StackingBuds[]>([]);

  useEffect(() => {
    eth.walletOfOwner().then((tokens) => {

      // * Development only
      // const temps: StackingBuds[] = [
      //   {
      //     "id": 3274,
      //     "currentStakeTimestamp": 1667765615,
      //     "totalStakeTimeAccrued": 2040420
      //   }
      // ]
      // setOwned(temps || []);
      setOwned(tokens || []);
    })
  }, []);

  return {
    ownedToken,
  };

}
