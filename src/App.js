import logo from "./logo.svg";
import "./App.css";
import MainCompo from "./component/MainCompo";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./component/Home";
import ProjectCompo from "./component/ProjectCompo";
import ZAKContext from "./Context";
import { useState } from "react";

function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainCompo />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectCompo />} />
      </Route>
    )
  );
  return (
    <ZAKContext.Provider
      value={{
        navHeight: navHeight,
        setNavHeight: setNavHeight,
        footerHeight: footerHeight,
        setFooterHeight: setFooterHeight,
      }}
    >
      <RouterProvider router={router} />
    </ZAKContext.Provider>
  );
}

export default App;
