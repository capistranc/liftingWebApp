/**
 * Created by chris on 2/8/17.
 */

export const dayScheme = (sets, reps, percent) => {
    return {
        sets: sets,
        reps: reps,
        percent: percent,
    }
};

const Routine = {
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

export const getMaxes = (exercises) => {
    console.log(exercises);
    var liftMaxes = {};
    for (var lift in exercises) {
        if (exercises[lift] !== undefined) {
            const label = exercises[lift].name;
            liftMaxes[label] = exercises[lift].orm;
        }
    }
    return liftMaxes;
};


export const generateRoutine = (action) => {
    console.log(action);
    const maxes = getMaxes(action.exercises);
    const numWorkouts = action.numWorkouts;
    const exerciseSplit = action.exerciseSplit;
    const schema = action.schema;
    const schemaUpdateRate = action.schemaUpdateRate;
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
                    if (day[exerciseTemp] !== undefined) {
                        var lift = day[exerciseTemp];
                        var weightVal = schema[schemaCounter].percent * maxes[lift];
                        var currentExercise = {
                            dayId: dailyCount++,
                            lift: lift,
                            sets: schema[schemaCounter].sets,
                            reps: schema[schemaCounter].reps,
                            weight: weightVal,
                        };
                        dailyWod.push(currentExercise);
                    }

                    ++i;
                    completeRoutine.push(dailyWod);
                }
            }

        }
    }
    return completeRoutine;
};


//Routine actions
var numRoutines = 0;
export const addRoutine = () => {
    return {
        type: 'ADD_ROUTINE',
        id: numRoutines++,
        routine: generateRoutine(Routine),
    }
};

export const editRoutine = (id) => {
    return {
        type: 'EDIT_ROUTINE',
        id
    }
};

export const deleteRoutine = (id) => {
    return {
        type: 'DELETE_ROUTINE',
        id
    }
};

////exercise actions
var numExercises = 0;
export const addExercise = (name, orm) => {
    return {
        type: 'ADD_EXERCISE',
        id: numExercises++,
        name,
        orm,
    };
};

export const editExName = (id, name) => {
    return {
        type: 'EDIT_NAME',
        id,
        name
    };
};

export const updateORM = (id, orm) => {
    return {
        type: 'UPDATE_ORM',
        id,
        orm,
    };
};

export const deleteExercise = (id) => {
    return {
        type: 'DELETE_EXERCISE',
        id
    };
};