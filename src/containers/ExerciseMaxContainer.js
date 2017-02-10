/**
 * Created by chris on 2/8/17.
 */
import React from 'react';
import ExerciseMaxes from '../components/ExerciseMaxes'
import {updateORM} from '../actions'
import { connect } from 'react-redux'





const mapStateToProps = (state) => {
    return {
        exercises: state.exercises,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (e, values) => {

        },
        handleUpdate: (e,id, weight) => {
            e.preventDefault();
            dispatch(updateORM(parseInt(id,10),parseInt(weight,10)))},
    };
};

const ExerciseMaxesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseMaxes);


export default ExerciseMaxesContainer