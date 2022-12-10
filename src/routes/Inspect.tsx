import React, { useState } from "react";
import { useSearchBud } from "../hooks/useSearchBud";
import OwnedItem from "../components/Owned/OwnedItem";
import StakingInfo from "../components/StakingInfo";
import { FaSearch } from "react-icons/fa";

type Props = {};

export const Inspect: React.FC<Props> = ({}) => {
  const [search, setSearch] = useState("");
  const { searchedBud } = useSearchBud(search);

  return (
    <>
      <div className="container flex flex-col gap-16">
        <div className="flex gap-2 w-2/3 mx-auto">
          <input
            type="text"
            value={search}
            className="w-full border-2 border-gray-300 bg-white/70 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {searchedBud && (
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <OwnedItem token={searchedBud} />
            </div>
            <StakingInfo bud={searchedBud} />
          </div>
        )}
      </div>
    </>
  );
};

Inspect.defaultProps = {};

export default Inspect;
