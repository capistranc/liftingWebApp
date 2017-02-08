import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import generateRoutine from './RoutineGenerator'

let products = [];

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




const routine = generateRoutine();
var dayOfRoutine = 1;
// routine, dayOfRoutine

const capitalizedString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};



// dayLog = log.getTop();

const dayFormat = () => {
    const dayRoutine = routine[dayOfRoutine];
    var dayLog = [];



    const formattedDay = [];
    for (var exercise in dayRoutine) {
        const temp = dayRoutine[exercise];
        var formattedExercise = {
            id: temp.id,
            lift: capitalizedString(temp.lift),
            goal: '' + temp.sets + 'x' + temp.reps + ' ' + temp.weight + 'lbs.',
            difficulty: 'Moderate',

        };
        formattedDay.push(formattedExercise)
    }
    return formattedDay;
};


export default class CalendarDay extends React.Component {
    constructor() {
        super();
        dayFormat();
        var routine = generateRoutine();

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