/**
 * Created by chris on 2/8/17.
 */
import { connect } from 'react-redux'
import CalendarDay from '../components/CalendarDay'
import {viewWorkout} from '../actions'
// const getVisibleTodos = (todos, filter) => {
//     switch (filter) {
//         case 'SHOW_ALL':
//             return todos
//         case 'SHOW_COMPLETED':
//             return todos.filter(t => t.completed)
//         case 'SHOW_ACTIVE':
//             return todos.filter(t => !t.completed)
//     }
// }

const capitalizedString = (string) => {
    var str = '' + string;
    return str.charAt(0).toUpperCase() + string.slice(1);
};

const dayFormat = (dayRoutine) => {
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


const mapStateToProps = (state) => {
    var program, routineWod;
    program = state.profile.program;

    routineWod = program[state.profile.dayView];
    var formattedDay = dayFormat(routineWod);

    return {
        wod: formattedDay,
        profile: state.profile,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPrevClick: (profile) => {
            const id = profile.dayView - 1;
            if (id >= 0)
                dispatch(viewWorkout(id))
        },
        onNextClick: (profile) => {
            const id = profile.dayView + 1;
            if (id < profile.program.length)
                dispatch(viewWorkout(id))
        },
    };
};

const CalendarDayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarDay);

export default CalendarDayContainer