import { useContext } from "react";
import { CardContent } from "./Models.styled";
import ModelsJsonData from "../../data/carData/models.json";
import Model from "./Model";
import { ModelContext } from "../../store/model-context";
import ModelForm from "../ModelForm/ModelForm";

export interface ModelsDataType {
  id: number;
  modelName: string;
  imageUrl: string;
}

const Models = () => {
  const { showModel } = useContext(ModelContext);
  const ModelsData: ModelsDataType[] = ModelsJsonData;
  return (
    <>
      <CardContent>
        {ModelsData.map((model: ModelsDataType) => (
          <Model key={model.id} {...model} />
        ))}
      </CardContent>
      {showModel && <ModelForm />}
    </>
  );
};

export default Models;
