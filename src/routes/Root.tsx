import React from "react";
import { Outlet, Link } from "react-router-dom";

type Props = {};

export const Root: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <Outlet />
      </div>
      <div className="fixed right-0 bottom-2 left-0 flex justify-evenly">
        <Link
          to="/basemint"
          className="text-amber-700 hover:text-amber-400 hover:underline transition-all"
        >
          Home
        </Link>
        <Link
          to="/basemint/supply"
          className="text-amber-700 hover:text-amber-400 hover:underline transition-all"
        >
          Supply
        </Link>
      </div>
    </>
  );
};

Root.defaultProps = {};

export default Root;
