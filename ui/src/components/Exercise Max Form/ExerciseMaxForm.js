import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

const capitalizedString = (string) => {
    var str = '' + string;
    return str.charAt(0).toUpperCase() + string.slice(1);
};
////////

const required = value => value ? undefined : 'Required'
// const maxLength = max => value =>
//     value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength15 = maxLength(15)

const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue1 = minValue(1);

const maxValue = max => value =>
    value && value > max ? `Must be ${max} or less` : undefined
const maxValue20 = maxValue(20);
const maxValue9999 = maxValue(9999);


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

let ExerciseMaxForm = (props) => {
    var exerciseOptions = [];
    const { handleSubmit, pristine, reset, submitting, exercises } = props;

    for (var i in exercises) {
        if (exercises[i] !== undefined) {
            exerciseOptions.push({name: capitalizedString(exercises[i].name), id: exercises[i].id})
        }
    }
    return (
        <form onSubmit={handleSubmit}>

            <Field name="reps" type="number"
                   component={renderField} label="Reps:"
                   validate={[ required, number, minValue1, maxValue20 ]}
            />
            <Field name="weight" type="number"
                   component={renderField} label="Weight: "
                   validate={[ required, number, minValue1, maxValue9999 ]}
            />

            <Field name="exercise" component="select" validate={[required]}>
                <option value="">Select an exercise...</option>
                {exerciseOptions.map(liftOption =>
                    <option value={liftOption.id} key={liftOption.id}>{liftOption.name}</option>)}
            </Field>

            <div>
                <button type="click" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ExerciseMaxForm = reduxForm({
    form: 'exerciseMaxForm',  // a unique identifier for this form
})(ExerciseMaxForm);

// You have to connect() to any reducers that you wish to connect to yourself
ExerciseMaxForm= connect(
    state => ({
        initialValues: {weight: 275, reps: 5}  // pull initial values from account reducer
    }),
    // { load: loadAccount }               // bind account loading action creator
)(ExerciseMaxForm);

export default ExerciseMaxForm