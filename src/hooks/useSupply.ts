import { useState, useEffect } from "react";
import eth from "../eth";

export const useSupply = () => {
  const [supply, setSupply] = useState(0);
  const [supplyForSale, setSupplyForSale] = useState(5000);

  useEffect(() => {
    const interval = setInterval(() => {
      eth.totalSupply().then((supply) => {
        setSupply(supply);
      });

      eth.supplyForSale().then((supplyForSale) => {
        setSupplyForSale(supplyForSale);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    vfp: 0,
    supply: supply,
    total: supplyForSale
  };
}
