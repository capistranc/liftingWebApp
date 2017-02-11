/**
 * Created by chris on 2/8/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import { initProfile, addRoutine, dayScheme, generateProgram, storeProgram } from '../actions'



let storeTest = ({ exercises, dispatch, routine }) => {
    let handleSubmit = e => {
        e.preventDefault();
        dispatch(initProfile());
        console.log(exercises);
        dispatch(storeProgram(generateProgram(exercises, routine)));
    };
    return (
        <div className="text-center">
            <div className="row">
                <form onSubmit={(e) => handleSubmit(e)} >
                    <button className='btn btn-info' type="submit">
                        Generate Personal Routine
                    </button>
                </form>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        exercises: state.exercises,
        routine: state.routines[0],
    }
};

storeTest = connect(mapStateToProps)(storeTest);

export default storeTest