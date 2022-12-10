import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

type Props = {};

export const Root: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <Outlet />
      </div>
      <Navbar />
    </>
  );
};

Root.defaultProps = {};

export default Root;
