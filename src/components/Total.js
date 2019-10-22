import React from 'react';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    price: state.car.price,
    additionalPrice: state.additionalPrice
  }
}

export default Total;
