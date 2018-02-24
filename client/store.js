import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// import root reducer
import rootReducer from './reducers/index';
// import dummy data
import comments from './data/comments';
import posts from './data/posts';


// create an object for initial state
const initialState = {
    posts,
    comments
};

// create redux store
const store = createStore(rootReducer,  initialState);

// history for react router
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
