import React, { useEffect } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import { Root, Supply, Home, Inspect } from "./routes";

type Props = {};

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/supply",
        element: <Supply />,
      },
      {
        path: "/inspect",
        element: <Inspect />,
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
