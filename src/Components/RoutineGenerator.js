/**
 * Created by chris on 2/7/17.
 */
/**
 * Created by chris on 2/7/17.
 */
// import React, { Component } from 'react';

const dayScheme = (sets, reps, percent) => {
    return {
        sets: sets,
        reps: reps,
        percent: percent,
    }
};

const Routine = {
    exercises: ['squat', 'shoulder press', 'bench press', 'rows', 'deadlift', 'abs', 'curls'],
    numDays: 3,
    numWeeks: 7,
    numWorkouts: 21,
    numSplit: 2,
    exerciseSplit: [['squat', 'shoulder press', 'rows', 'bench press', 'abs', 'curls'],
        ['squat', 'shoulder press', 'deadlift', 'bench press', 'abs', 'curls']],
    schemaUpdateRate: 3,
    schema: [dayScheme(3,10,.60),dayScheme(3,10,.65),
        dayScheme(3,8,.70),dayScheme(3,8,.75),
        dayScheme(3,5,.80),dayScheme(3,5,.85), dayScheme(1,1,1)],
};

var generateRoutine = () => {
    const numWorkouts = Routine.numWorkouts;
    const exerciseSplit = Routine.exerciseSplit;
    const schema = Routine.schema;
    const schemaUpdateRate = Routine.schemaUpdateRate;
    var completeRoutine = [];
    var i = 1;
    var schemaCounter = -1;

    while (i <= numWorkouts) {
        for (var dailySplit in exerciseSplit) {
            if (i <= numWorkouts) {
                var dailyWod = [];
                var dailyCount = 1;

                if (i % schemaUpdateRate === 1) {
                    schemaCounter++;
                }

                var day = exerciseSplit[dailySplit];

                for (var exerciseTemp in day) {
                    var lift = day[exerciseTemp];

                    var currentExercise = {
                        id: dailyCount++,
                        lift: lift,
                        sets: schema[schemaCounter].sets,
                        reps: schema[schemaCounter].reps,
                        weight: schema[schemaCounter].percent,
                    };


                    dailyWod.push(currentExercise);
                }


                ++i;
                completeRoutine.push(dailyWod);
            }

        }
    }
    return completeRoutine;
};

export default generateRoutine



// class RoutineGenerator extends Component {
//     constructor() {
//         super();
//         this.handleClick = this.handleClick.bind(this);
//
//         this.state = {
//             routine: generateRoutine(),
//         };
//     }
//
//     handleClick(e) {
//         e.preventDefault();
//         console.log(this.state.routine);
//     }
//
//     render() {
//         return (
//             <div className="container">
//                 <button className='btn btn-info' onClick={this.handleClick}> Routine</button>
//             </div>
//         );
//     }
// }
//
// export default RoutineGenerator;