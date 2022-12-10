import React, { useEffect } from "react";
import Owned from "./components/Owned";
import SupplyCard from "./components/SupplyCard";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import { Root, Supply, Home } from "./routes";

type Props = {};

const router = createBrowserRouter([
  {
    path: "/basemint",
    element: <Root />,
    children: [
      {
        path: "/basemint/",
        element: <Home />,
      },
      {
        path: "/basemint/supply",
        element: <Supply />,
      },
    ],
  },
]);

export const App: React.FC<Props> = ({}) => {
  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(https://pbs.twimg.com/media/FgE5pugUYAE43ZG?format=jpg&name=4096x4096)`,
        }}
      >
        <RouterProvider router={router} />
      </div>
    </>
  );
};

App.defaultProps = {};

export default App;
