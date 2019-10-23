import { REMOVE_FEATURE } from "../actions/removeFeature";
import { ADD_FEATURE } from '../actions/addFeature';
// import App from '../App';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export function reducer(state=initialState, action) {
      switch(action.type) {
          case ADD_FEATURE:
              console.log(`Adding feature...`)
              return {
                  ...state,
                  features: [...state, action.payload]
              }
          case REMOVE_FEATURE:
              console.log(`Removing feature...`)
              return {
                  ...state,
                  features: this.props.features.filter(item => item(
                      !item.id
                  ))
              }
          default:
              console.log(`Mistakes have been made`)
              return state;
      }
  }