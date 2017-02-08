import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {dayScheme} from '../actions'
// const exercisePlan = (name, sets, reps, weight) => {
//     return {
//     name: name,
//     sets: sets,
//     reps: reps,
//     weight: weight,
// }};
//
// const sampleRoutine = [
//     [exercisePlan00, exercisePlan01, exercisePlan02, exercisePlan03, exercisePlan04, exercisePlan05],
//     [exercisePlan10, exercisePlan11, exercisePlan12, exercisePlan13, exercisePlan14, exercisePlan15],
//     [exercisePlan20, exercisePlan21, exercisePlan22, exercisePlan23, exercisePlan24, exercisePlan25]
// ];

const routine = {
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

// const routine = generateRoutine(Routine);
var dayOfRoutine = 1;
// routine, dayOfRoutine

const capitalizedString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};



// dayLog = log.getTop();

const dayFormat = () => {
    const dayRoutine = routine[dayOfRoutine];
    // var dayLog = [];

    const formattedDay = [];
    for (var exercise in dayRoutine) {
        if (dayRoutine[exercise] !== undefined) {
            const temp = dayRoutine[exercise];
            var formattedExercise = {
                id: temp.id,
                lift: capitalizedString(temp.lift),
                goal: '' + temp.sets + 'x' + temp.reps + ' ' + temp.weight + 'lbs.',
                difficulty: 'Moderate',

            };
            formattedDay.push(formattedExercise)
        }
    }
    return formattedDay;
};


export default class CalendarDay extends React.Component {
    constructor() {
        super();
        dayFormat();
    }

    render() {
        return (
            <BootstrapTable data={ dayFormat() }>
                <TableHeaderColumn dataField='id' isKey={ true }>B</TableHeaderColumn>
                <TableHeaderColumn dataField='lift'>Exercise</TableHeaderColumn>
                <TableHeaderColumn dataField='goal'>Goal</TableHeaderColumn>
                <TableHeaderColumn dataField='difficulty'> Difficulty </TableHeaderColumn>

            </BootstrapTable>
        );
    }
}