import { createBrowserRouter } from "react-router-dom";
import ModelRootComponent from "../components/Models";
import FilterModels from "../components/FilterModels";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <ModelRootComponent />,
    },
    {
      path: "/filter-cars",
      element: <FilterModels />,
    },
  ]);