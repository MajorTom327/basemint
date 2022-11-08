import React, { useEffect } from "react";
import Owned from "./components/Owned";
import SupplyCard from "./components/SupplyCard";

type Props = {};

export const App: React.FC<Props> = ({}) => {

  const [showSupply, setShowSupply] = React.useState(true);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(https://pbs.twimg.com/media/FgE5pugUYAE43ZG?format=jpg&name=4096x4096)`,
      }}
    >
      <div
        className={`flex flex-col h-full py-8 overflow-scroll gap-4 ${
          showSupply ? "justify-between" : "justify-center"
        }`}
      >
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 w-2/3">
            <Owned />
          </div>
        </div>
        {showSupply && (
          <div className="flex justify-around">
            <div className="w-2/3">
              <SupplyCard />
            </div>
          </div>
        )}
      </div>
      <div className="fixed right-0 bottom-2 left-0 flex justify-evenly">
        <button
          className="text-amber-700 hover:text-amber-400 hover:underline transition-all"
          onClick={() => setShowSupply(!showSupply)}
        >
          Supply
        </button>
      </div>
    </div>
  );
};

App.defaultProps = {};

export default App;
