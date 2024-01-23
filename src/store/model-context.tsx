import { ReactNode, createContext, useState } from "react";

export type ModelContextTypes = {
  showModel: boolean;
  modelName: string;
  onClickModelHandler: (val: string) => void;
};

export const ModelContext = createContext<ModelContextTypes>({
  showModel: false,
  modelName: "",
  onClickModelHandler: (val) => {},
});

export default function ModelContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [modalState, setModalState] = useState({
    showModel: false,
    modelName: "",
  });

  const onClickHandler = (model: string) => {
    setModalState((prevState) => {
      return {
        ...prevState,
        modelName: model,
        showModel: true,
      };
    });
  };

  const contextValue: ModelContextTypes = {
    showModel: modalState.showModel,
    modelName: modalState.modelName,
    onClickModelHandler: onClickHandler,
  };

  return (
    <ModelContext.Provider value={contextValue}>
      {children}
    </ModelContext.Provider>
  );
}
