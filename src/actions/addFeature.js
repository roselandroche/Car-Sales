export const ADD_FEATURE = 'ADD_FEATURE';

export function addFeature(item) {
    // console.log(props)
    return {
        type: ADD_FEATURE,
        payload: item
    };
}