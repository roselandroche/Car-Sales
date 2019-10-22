import React from 'react';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.name}
    </li>
  );
};

function mapStateToProps(state) {
  return {
    feature: state.car.features,
    name: state.car.features.name
  }
}

export default connect(
  mapStateToProps
)(AddedFeature);
