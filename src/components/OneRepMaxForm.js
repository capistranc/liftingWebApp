import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'

let OneRepMaxForm = props => {
    const { handleSubmit, pristine, reset, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="weight">Weight Lifted: </label>
                <Field name="weight" component="input" type="text"/>

                <label htmlFor="reps">Reps: </label>
                <Field name="reps" component="input" type="text"/>



                <button className='btn btn-sm btn-warning' onClick={reset} type="click">Reset</button>
            </div>
        </form>
    )
};

OneRepMaxForm = reduxForm({
    form: 'oneRepMaxForm' // a unique name for this form
})(OneRepMaxForm);

OneRepMaxForm= connect(
    state => ({
        initialValues: {weight: 275, reps: 5}  // pull initial values from account reducer
    }),
    // { load: loadAccount }               // bind account loading action creator
)(OneRepMaxForm);

export default OneRepMaxForm