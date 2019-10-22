import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { reducer as carReducer } from './reducers/car';
import { reducer as additionalPriceReducer } from './reducers/additionalPrice';
import { reducer as additionalFeaturesReducer } from './reducers/addionalFeaturesReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

 const rootReducer = combineReducers({
     car: carReducer,
     additionalPrice: additionalPriceReducer,
     additionalFeatures: additionalFeaturesReducer
 })

 const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
