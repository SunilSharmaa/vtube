import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Home from "./Pages/Home";
import AboutUs from "./Components/AboutUs";
import { Provider } from "react-redux";
import reduxStore from "./Redux/reduxStore";
import WatchPage from "./Pages/WatchPage";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/watch", element: <WatchPage /> },
      ],
    },
  ]);
  return (
    <Provider store={reduxStore}>
      <RouterProvider router={route} />
    </Provider>
  );
};

export default App;
