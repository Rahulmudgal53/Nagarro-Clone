import React from "react";
import "./index.css";
import "./App.css";
import {  RouterProvider,  createBrowserRouter,  createRoutesFromElements,  Route,} from "react-router-dom";
import ReactDOM from "react-dom/client";


import {Homepage, Industries, Services} from './pages/index.jsx';

import {Layout , NotFound} from "./components/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      {/* <Route path="/path" element={<Any-Page />} /> */}

      <Route path="/" element={<Homepage />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/services" element={<Services />} />

      {/* For Random path */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);


function App() {
  return <RouterProvider router={router} />;    
}

export default App
