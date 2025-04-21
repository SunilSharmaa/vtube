import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Layouts/AppLayout';
import Home from './Pages/Home';
import AboutUs from './Components/AboutUs';

const App = () => {
  const route = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children : [
          {path:"/", element: <Home />},
          {path:"/aboutus", element: <AboutUs />},
        ]
    }
])
  return (<RouterProvider router={route}></RouterProvider>)
}

export default App