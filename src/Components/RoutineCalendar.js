/**
 * Created by chris on 2/7/17.
 */
/**
 * Created by chris on 2/7/17.
 */
import React, { Component } from 'react';

var generateRoutine = (numWorkouts, exerciseSplit, schema, numSplit,schemaUpdateRate) => {
    completeRoutine = [];
    var i = 0;

    while (i < numWorkouts)
    {
        var schemaCounter = -1;
        for (var dailySplit in exerciseSplit) {
            var dailyWOD = {};

            if (i % schemaUpdateRate === 0) {
                schemaCounter++;
            }


            for (var exercise in dailySplit) {


                var currentExercise = {
                    lift: exercise,
                    sets: schema[schemaCounter],
                    reps: currReps,
                    weight, currWeight,
                };

                dailyWOD.push(currentExercise);
            }

            i++;


        }

    }

};

const dayScheme = (sets, reps, percent, type) => {
    return {
        sets: sets,
        reps: reps,
        percent: percent,
    }
};

var Routine = {
    exercises: ['squat', 'shoulder press', 'bench press', 'rows', 'deadlift', 'abs', 'curls'],
    numDays: 3,
    numWeeks: 7,
    numSplit: 2,
    daySplit: [['squat', 'shoulder press', 'rows', 'bench press', 'abs', 'curls'],
    ['squat', 'shoulder press', 'deadlift', 'bench press', 'abs', 'curls']],
    schemaUpdateRate: 3,
    schema: [dayScheme(3,10,.60),dayScheme(3,10,.65),
        dayScheme(3,8,.70),dayScheme(3,8,.75),
        dayScheme(3,5,.80),dayScheme(3,10,.85)],
};


class RoutineCalendar extends Component {
    constructor() {
        super();
        this.handleReset= this.handleReset.bind(this);

        this.state = {
            weight: 0,
            reps: 0,
            orm: 0,
        };
    }

    handleReset(e) {
        e.preventDefault();
        this.setState({weight: 0, reps: 0, orm: 0})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Weight Lifted  <input type='number' min='1' max='9999' name='weight' onChange={this.handleChange} value={this.state.weight}/></label>
                    <label title='Enter up to 20 reps'>  Reps Performed <input type='number' min='1' max='20' name='reps' onChange={this.handleChange} value={this.state.reps}/> </label>
                    <button  >Calculate </button> <button onClick={this.handleReset}> Reset </button>

                </form> <br />

            </div>
        );
    }
}

export default RoutineCalendar;


//could be 2400-3200 calories depending on size of sandwich, good macro nutrient spread,
//