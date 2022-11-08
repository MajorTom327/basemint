import { useEffect, useState } from "react";
import eth from "../eth";
import { StackingBuds } from "../types/Buds";



export const useOwning = () => {
  const [ownedToken, setOwned] = useState<StackingBuds[]>([]);

  useEffect(() => {
    eth.walletOfOwner().then((tokens) => {
      setOwned(tokens);
    })
  }, []);

  return {
    ownedToken,
  };

}
