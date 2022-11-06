import { useEffect, useState } from "react";
import eth from "../eth";



export const useOwning = () => {
  const [ownedToken, setOwned] = useState<Buds[]>([]);

  useEffect(() => {
    eth.walletOfOwner().then((tokens) => {
      setOwned(tokens);
    })
  }, []);

  return {
    ownedToken,
  };

}
