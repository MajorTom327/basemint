import React from "react";
import { Card } from "./Card";
import { Link } from "react-router-dom";

type Props = {};

export const Navbar: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="fixed right-0 bottom-2 left-0">
        <div className="container mx-auto">
          <Card>
            <div className="flex w-full gap-4 justify-evenly">
              <Link to="/basemint" className=" hover:underline transition-all">
                Home
              </Link>
              <Link
                to="/basemint/supply"
                className=" hover:underline transition-all"
              >
                Supply
              </Link>
              <Link
                to="/basemint/inspect"
                className=" hover:underline transition-all"
              >
                Inspect
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
