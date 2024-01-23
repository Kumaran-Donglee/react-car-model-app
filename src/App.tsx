import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Router } from "./Routes/Routes";

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
