import { useContext } from "react";
import { ModelsDataType } from "./Models";
import { Card, CardImg } from "./Models.styled";
import { ModelContext } from "../../store/model-context";

const Model = (props: ModelsDataType) => {
    const { modelName, imageUrl } = props;
    const { onClickModelHandler, showModel } = useContext(ModelContext);
    return <Card onClick={() => onClickModelHandler(modelName)}><CardImg src={imageUrl} /><div>{modelName}</div></Card>
};

export default Model;