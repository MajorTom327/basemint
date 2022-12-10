import { useEffect, useState } from "react";
import { useDebounceEffect } from 'ahooks'
import { StackingBuds } from "../types/Buds";
import eth from "../eth";

export const useSearchBud = (id: string) => {
  const [searchedBud, setSearchedBud] = useState<StackingBuds | undefined>(undefined);

  useDebounceEffect(() => {
    if (!id || id.length <= 0) {
      return;
    }

    eth.getStackingBud(parseInt(id)).then((bud) => {
      setSearchedBud(bud);
    });
  }, [id], { wait: 1000 })


  return {
    searchedBud,
  };
}
