const initialState = {
  bitcoinArray: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEW_PRICE':
      return {
        ...state,
        bitcoinArray: [
          ...state.bitcoinArray,
          Object.assign(action.payload, {time: action.time}),
        ],
      };
    case 'SORT_MAX':
      return {
        ...state,
        bitcoinArray: state.bitcoinArray.sort((a, b) =>
          a.quote?.USD.price > b.quote?.USD.price ? 1 : -1,
        ),
      };
    case 'SORT_MIN':
      return {
        ...state,
        bitcoinArray: state.bitcoinArray.sort((a, b) =>
          a.quote?.USD.price < b.quote?.USD.price ? 1 : -1,
        ),
      };
    case 'CLEAR_ARRAY':
      return {
        ...initialState
      };
    default:
      return state;
  }
};
