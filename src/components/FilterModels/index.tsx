import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import { ModelTypes, RootState } from "../../store";
import { ChildWrapper, ContainerWrapper } from "./FilterModels.styled";
import _ from "lodash";
import CarJsonData from "../../data/carData/models.json";
import { Card, CardImg } from "../Models/Models.styled";

const FilterModels = () => {
  const [filterModel, setFilterModel] = useState({
    location: "",
    model: "",
    owners: "",
    transmission: "",
  });
  const stateData: ModelTypes = useSelector(
    (state: RootState) => state.carModel
  );
  const [filteredModel, setFilteredModel] = useState(stateData.modelData);
  const onFilterUpdate = (
    filterVal: { [key: string]: string },
    updateFilterState: any,
    name: string
  ) => {
    return updateFilterState[name]
      ? {
          ...filterVal,
          [name]: updateFilterState[name],
        }
      : { ...filterVal };
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    name: string
  ) => {
    const updatedFilterState = { ...filterModel, [name]: event.target.value };
    setFilterModel((prevState) => {
      return { ...prevState, ...updatedFilterState };
    });
    let updatedValues = stateData.modelData;
    if (
      updatedFilterState.location ||
      updatedFilterState.model ||
      updatedFilterState.owners ||
      updatedFilterState.transmission
    ) {
      let filterValues = {};
      filterValues = onFilterUpdate(filterValues, updatedFilterState, 'location');
      filterValues = onFilterUpdate(filterValues, updatedFilterState, 'model');
      filterValues = onFilterUpdate(filterValues, updatedFilterState, 'owners');
      filterValues = onFilterUpdate(filterValues, updatedFilterState, 'transmission');
      updatedValues = _.filter(stateData.modelData, filterValues);
    }
    setFilteredModel(updatedValues);
  };

  return (
    <div className="App">
      <Header />
      <h1>Filters Models</h1>
      <ContainerWrapper>
        <ChildWrapper>
          <div>
            <label>Location</label>
            <select
              name="location"
              onChange={(event) => onChangeHandler(event, "location")}
            >
              {_.unionBy(stateData.modelData, "location").map(
                (value, index) => (
                  <option key={value.name} value={value.location}>
                    {value.location}
                  </option>
                )
              )}
            </select>
          </div>
          <div>
            <label>Brand</label>
            {_.unionBy(stateData.modelData, "model").map((value, index) => (
              <>
                <input
                  key={index}
                  type="radio"
                  name="brand"
                  value={value.model}
                  onChange={(event) => onChangeHandler(event, "model")}
                />
                {value.model}
              </>
            ))}
          </div>
          <div>
            <label>Owners</label>
            <>
              <input
                type="radio"
                name="owners"
                value="1"
                onChange={(event) => onChangeHandler(event, "owners")}
              />
              1st Owner
              <input
                type="radio"
                name="owners"
                value="2"
                onChange={(event) => onChangeHandler(event, "owners")}
              />
              2nd Owner
              <input
                type="radio"
                name="owners"
                value="3"
                onChange={(event) => onChangeHandler(event, "owners")}
              />
              3rd Owner
            </>
          </div>
          <div>
            <label>Transmission</label>
            <>
              <input
                type="radio"
                name="transmission"
                value="automatic"
                onChange={(event) => onChangeHandler(event, "transmission")}
              />
              Automatic
              <input
                type="radio"
                name="transmission"
                value="manual"
                onChange={(event) => onChangeHandler(event, "transmission")}
              />
              Manual
            </>
          </div>
        </ChildWrapper>
        <ContainerWrapper>
          {filteredModel.map((model) => (
            <Card>
              <CardImg
                src={
                  _.filter(CarJsonData, ["modelName", model.model])[0].imageUrl
                }
              />
              <div>{model.model}</div>
            </Card>
          ))}
        </ContainerWrapper>
      </ContainerWrapper>
    </div>
  );
};

export default FilterModels;
