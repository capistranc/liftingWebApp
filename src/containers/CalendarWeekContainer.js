/**
 * Created by chris on 2/8/17.
 */
/**
 * Created by chris on 2/8/17.
 */
import { connect } from 'react-redux'
import CalendarWeek from '../components/CalendarWeek'
import {viewWorkout} from '../actions'
// }

const capitalizedString = (string) => {
    var str = '' + string;
    return str.charAt(0).toUpperCase() + string.slice(1);
};

const dayFormat = (dayRoutine) => {
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
    var weeklyRoutine = [];

    if (state.routines !== []) {
        var program = state.profile.program;
        var routine = state.routines[state.profile.selectedRoutine];
        const numWeekly = 3;
        // const numWeekly = routine.numWeeklyWorkouts;

        const day = state.profile.dayView;
        const offset = day % numWeekly;

        const weekView = day - offset;

        for (let i = 0; i < numWeekly; i++) {
            const formattedDay = dayFormat(program[weekView + i])
            weeklyRoutine.push(formattedDay)
        }
    }

    return {
        week: weeklyRoutine,
        profile: state.profile,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPrevClick: (profile) => {
            const id = profile.dayView - 3;
            if (id >= 0)
                dispatch(viewWorkout(id))
        },
        onNextClick: (profile) => {
            const id = profile.dayView + 3;
            if (id < profile.program.length)
                dispatch(viewWorkout(id))
        },
    };
};

const CalendarWeekContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarWeek);

export default CalendarWeekContainer