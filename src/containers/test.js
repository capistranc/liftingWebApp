/**
 * Created by chris on 2/8/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import { initProfile, addRoutine, dayScheme, generateProgram, storeProgram } from '../actions'

const test = {
    exercises: [{id: 0, name: 'squat', orm: 345}, {id: 1, name: 'shoulder press', orm: 175},
        {id: 2, name: 'bench press', orm: 275}, {id: 3, name: 'rows', orm: 275},
        {id: 4, name: 'deadlift', orm: 305}, {id: 5, name: 'abs', orm: 105}, {id: 6, name: 'curls', orm: 75}],
    numDays: 3,
    numWeeks: 7,
    numWorkouts: 21,
    numSplit: 2,
    exerciseSplit: [['squat', 'shoulder press', 'rows', 'bench press', 'abs', 'curls'],
        ['squat', 'shoulder press', 'deadlift', 'bench press', 'abs', 'curls']],
    schemaUpdateRate: 3,
    schema: [dayScheme(3, 10, .60), dayScheme(3, 10, .65),
        dayScheme(3, 8, .70), dayScheme(3, 8, .75),
        dayScheme(3, 5, .80), dayScheme(3, 5, .85), dayScheme(1, 1, 1)],

};

let storeTest = ({ state, dispatch }) => {
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(initProfile());
                dispatch(addRoutine(test));
                dispatch(storeProgram(generateProgram(test)));
            }}>
                <div className="text-center">
                    <button className='btn btn-info' type="submit">
                        Add Default Routine
                    </button>
                </div>
            </form>
        </div>
    )
};

storeTest = connect()(storeTest);

export default storeTest