import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_ETENSION__ && window.__REDUX_DEVTOOLS_ETENSION__())

export default store;