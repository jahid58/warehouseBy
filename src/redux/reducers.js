import { fakeData } from "./fakeData";

const initialState = fakeData;

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_HOUSE": {
      const existedState = [...state];
      const house = existedState.find((pd) => pd.id === action.house.id);
      const index = existedState.indexOf(house);

      const newState = existedState.splice(index, 1, action.house);

      return existedState;
    }

    default:
      return state;
  }
};
