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

export const generateProgram = (rawRoutineData) => {
    console.log(rawRoutineData);
    const maxes = getMaxes(rawRoutineData.exercises);
    const numWorkouts = rawRoutineData.numWorkouts;
    const exerciseSplit = rawRoutineData.exerciseSplit;
    const schema = rawRoutineData.schema;
    const schemaUpdateRate = rawRoutineData.schemaUpdateRate;
    var completeRoutine = [];
    var i = 1;
    var schemaCounter = -1;
    console.log(numWorkouts);
    console.log(schema)

    while (i <= numWorkouts) {
        for (var dailySplit in exerciseSplit)
        {
            console.log(dailySplit)
            if (i <= numWorkouts)
            {
                if (i % schemaUpdateRate == 1) {
                    schemaCounter++;
                    console.log(i)
                    console.log(schemaCounter)
                    console.log(schemaUpdateRate);
                }

                var dailyWod = [];
                var dailyCount = 1;

                var day = exerciseSplit[dailySplit];

                for (var exerciseTemp in day)
                {
                    if (day[exerciseTemp] !== undefined) {
                        var lift = day[exerciseTemp];
                        var weightVal = schema[schemaCounter].percent * maxes[lift];
                        var currentExercise = {
                            dayId: dailyCount++,
                            lift: lift,
                            sets: schema[schemaCounter].sets,
                            reps: schema[schemaCounter].reps,
                            weight: parseInt(weightVal,10),
                        };
                        dailyWod.push(currentExercise);
                    }
                }
                i++;
                completeRoutine.push(dailyWod);

            }

        }
    }

    return completeRoutine;
};


//Routine actions
var numRoutines = 0;
export const addRoutine = (routine) => {
    return {
        type: 'ADD_ROUTINE',
        id: numRoutines++,
        routine: routine,
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

//PROFILE ACTIONS
export const initProfile = () => {
    return {
        type: 'INITIALIZE_PROFILE'
    }
};

export const storeProgram = (program) => {
    return {
        type: 'STORE_PROGRAM',
        program
    }
};

export const successWorkout = () => {
    return {
        type: 'SUCCESSFUL_WORKOUT'
    }
};

export const viewWorkout = (dayView) => {
    return {
        type: 'VIEW_WORKOUT',
        dayView
    }
};