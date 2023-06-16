import {createStore, combineReducers} from 'redux';
import langReducer from './reducers/langReducer';
import bitcoinReducer from './reducers/bitcoinReducer';
import delayReducer from './reducers/delayReducer';

const rootReducer = combineReducers({
  lang: langReducer,
  bitcoinArray: bitcoinReducer,
  delay: delayReducer,
});

export const store = createStore(rootReducer);
