import { useState, useContext } from "react";
import { InputFieldType } from "./ModelForm";
import { ModelContext } from "../../store/model-context";

const InputFields = (props: InputFieldType) => {
    const [inputs, setInputs] = useState({});
    const modelContext = useContext(ModelContext);

    const onChangeHandler = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prevState) => {
            return { ...prevState, [name]: event.target.value }
        })
    };

  return (
      <>
        <label htmlFor={props.id}>{props.label}</label>
        <input type={props.type} id={props.id} name={props.name} onChange={(event) => onChangeHandler(props.name, event)} value={props.value} />
      </>
  );
};

export default InputFields;
