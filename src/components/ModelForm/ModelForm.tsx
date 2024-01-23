import { useSelector, useDispatch } from "react-redux";
import InputField from "./InputForms";
import InputJsonData from "../../data/StaticJsonData/inputTextfield.json";
import classes from "./ModelForm.module.css";
import { ModelTypes, modelActions, RootState } from "../../store";
import { useContext } from "react";
import { ModelContext } from "../../store/model-context";

export type InputFieldType = {
  id: string;
  type: string;
  label: string;
  name: string;
  value?: string;
};

const ModelForm = () => {
  const dispatch = useDispatch();
  const stateData: ModelTypes = useSelector(
    (state: RootState) => state.carModel
  );
  const { modelName } = useContext(ModelContext);
  const InputFields: InputFieldType[] = InputJsonData;
  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as any);
    const data = Object.fromEntries(formData.entries());
    const updateFormData = {
      ...data,
      photo: (data?.photo as File)?.name,
      modelName,
    };
    dispatch(modelActions.addModel(updateFormData));
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes.inputWrapper}>
        {InputFields.map((input: InputFieldType) => (
          <div key={input.id} className={classes.inputs}>
            {input.value === "yes" ? (
              <InputField {...{ ...input, value: modelName }} />
            ) : (
              <InputField {...input} />
            )}
          </div>
        ))}
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ModelForm;
