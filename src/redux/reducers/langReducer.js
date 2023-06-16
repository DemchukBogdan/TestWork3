const initialState = {
  lang: 'en',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANG':
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
