export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function removeFeature(props) {
    console.log(props)
    return {
        type: REMOVE_FEATURE
    };
}