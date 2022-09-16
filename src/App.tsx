import React from 'react'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// pages
import Homepage from './pages/Homepage'
import Races from './pages/Races'

// style common
import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/races',
    element: <Races />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
