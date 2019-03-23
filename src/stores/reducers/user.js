const initialState = {
  data: [1, 2, 3]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFORMATION": {
      const newState = { ...state };
      const newAdd = newState.data.reduce((acc, cur) => acc + cur, 0);
      newState.data.push(newAdd);
      return newState;
    }
    default:
      return state;
  }
};
