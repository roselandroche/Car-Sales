import React from 'react';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={props.removeFeature} className="button">X</button>
      {props.name}
    </li>
  );
};

function mapStateToProps(state) {
  return {
    name: state.car.features.name
  }
}

export default connect(
  mapStateToProps
)(AddedFeature);
