const initialState = {
  delay: 60000,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DELAY':
      return {
        ...state,
        delay: action.payload,
      };
    case 'CLEAR_DELAY':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
