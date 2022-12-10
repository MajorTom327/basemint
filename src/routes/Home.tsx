import React from "react";
import { Owned } from "../components/Owned";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <div className={`flex flex-col h-full w-full py-8 overflow-scroll gap-4`}>
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 w-2/3">
            <Owned />
          </div>
        </div>
      </div>
    </>
  );
};

Home.defaultProps = {};

export default Home;
