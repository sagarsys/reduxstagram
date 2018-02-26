import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// React router deps
import { Router, Route, IndexRoute } from 'react-router';
// import css
import css from './styles/style.styl';
// components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
// redux store
import store, { history } from './store';

// init router
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

// DOM render
render(router, document.getElementById('root'));