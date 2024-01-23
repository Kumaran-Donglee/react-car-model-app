import ModelContextProvider from "../../store/model-context";
import Header from "../Header/Header";
import Models from "./Models";

const ModelRootComponent = () => {
    return (
      <div className="App">
        <Header />
        <ModelContextProvider>
          <Models />
        </ModelContextProvider>
      </div>
    );
  };

  export default ModelRootComponent;