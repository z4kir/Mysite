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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainCompo />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectCompo />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
