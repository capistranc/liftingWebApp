/**
 * Created by chris on 2/8/17.
 */
const validate = values => {
    // IMPORTANT: values is an Immutable.Map here!
    const errors = {}
    if (!values.get('reps')) {
        errors.reps = 'Required'
    } else if (isNaN(Number(values.get('reps')))) {
        errors.reps = 'Must be a number'
    } else if (Number(values.get('reps')) > 20 || Number(values.get('reps')) < 1 ) {
        errors.age = 'Must be between 1- 20 reps'
    }

    if (!values.get('weight')) {
        errors.weight = 'Required'
    } else if (isNaN(Number(values.get('weight')))) {
        errors.weight = 'Must be a number'
    } else if (Number(values.get('weight')) > 20 || Number(values.get('weight')) < 1 ) {
        errors.weight = 'Must be between 1-9999 lbs'
    }

    return errors;
};

export default validate