import { actionTypes } from "stores/actions";

const initialState = {
  privacies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRIVACIES:
      return {
        ...state,
        privacies: action.payload
      };
    default:
      return state;
  }
};
