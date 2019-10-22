import React from 'react';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.name} (+{props.price})
    </li>
  );
};

function mapStateToProps(state) {
  return {
    name: state.additionalFeatures.name,
    price: state.additionalFeatures.price
  }
}

export default connect(
  mapStateToProps
)(AdditionalFeature);
