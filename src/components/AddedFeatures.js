import React from 'react';
import { connect as connector} from 'react-redux';

import AddedFeature from './AddedFeature';
import { connect } from 'http2';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    features: state.car.features
  }
}

export default connector(
  mapStateToProps
)(AddedFeatures);
