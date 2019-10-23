export const ADD_FEATURE = 'ADD_FEATURE';

export function addFeature(props) {
    console.log(props)
    return {
        type: ADD_FEATURE
    };
}