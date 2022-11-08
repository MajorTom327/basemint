import React, { useEffect } from "react";
import Owned from "./components/Owned";
import SupplyCard from "./components/SupplyCard";

type Props = {};

export const App: React.FC<Props> = ({}) => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(https://pbs.twimg.com/media/FgE5pugUYAE43ZG?format=jpg&name=4096x4096)`,
      }}
    >
      <div className="flex flex-col justify-between h-full py-8 overflow-scroll">
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 w-2/3">
            <Owned />
          </div>
        </div>
        <div className="flex justify-around">
          <div className="w-2/3">
            <SupplyCard />
          </div>
        </div>
      </div>
    </div>
  );
};

App.defaultProps = {};

export default App;
