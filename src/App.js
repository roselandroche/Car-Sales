import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { REMOVE_FEATURE } from './actions/removeFeature';
import { ADD_FEATURE } from './actions/addFeature';

const App = () => {

  const removeFeature = (item, props) => {
    // dispatch an action here to remove an item
    props.dispatch({ REMOVE_FEATURE, payload: item });
  };

  const buyItem = (item, props) => {
    // dispatch an action here to add an item
    props.dispatch({ ADD_FEATURE, payload: item });
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

export default App;
