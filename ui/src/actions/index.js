/**
 * Created by chris on 2/8/17.
 */

export const getMaxes = (exercises) => {
    // console.log(exercises);
    let liftMaxes = {};
    for (let lift in exercises) {
        if (exercises[lift] !== undefined) {
            const label = exercises[lift].id;
            liftMaxes[label] = exercises[lift].orm;
        }
    }
    return liftMaxes;
};


/*
Input: rawRoutineData = {exercises, numDays, numWeeks, nuumWorkouts, numSplit, exerciseSplit,
strKey,idKey, schema

schema = { primary, secondary, other, stretch, schemaUpdateRate}

output: program = [ workout0, ..., workoutn]
workout = [exercise0, ... , exercisen]
exercise = {dayId, id, sets, reps, weight]
 */
export const generateProgram = (exercises, routineData) => {
    // console.log(routineData);
    console.log(exercises);

    const {numWorkouts,exerciseSplit, schema, strKey, idKey} = {...routineData};

    const schemaUpdateRate = schema.updateRate;

    let completeRoutine = []; // Will store an array of workoutDays
    let i = 1;
    let schemaCounter = -1;
    // console.log(numWorkouts);
    // console.log(schema)

    while (i <= numWorkouts) { //iterates over all workouts in routine
        for (let dailySplit in exerciseSplit) //Alternates between days of routine
        {
            if (i <= numWorkouts)
            {
                if (i % schemaUpdateRate === 1) { //updates rep scheme for workout / track weeks
                    schemaCounter++;
                }

                let dailyWod = []; //stores an array of exercises
                let dailyCount = 1; //tracks

                let tempWod = exerciseSplit[dailySplit];  //Array of exercises from routine

                for (let ex in tempWod) //Iterates over exercises in a workout
                {
                    if (tempWod[ex] !== undefined) {
                        let temp = tempWod[ex];

                        let exerciseData = {...temp, orm: exercises[temp.id].orm};


                        let currSchema;

                        switch (exerciseData.class) {
                            case 1:
                                currSchema = schema.primary;
                                break;
                            case 2:
                                currSchema = schema.secondary;
                                break;
                            case 3:
                                currSchema = schema.other;
                                break;
                            case 4:
                                currSchema = schema.stretch;
                                break;
                            default:
                                break;
                        }

                        let weightVal = currSchema[schemaCounter].percent * exerciseData.orm;

                        let currentExercise = {
                            dayId: dailyCount++,
                            exId: exerciseData.id,
                            lift: '' + exerciseData.name,
                            sets: currSchema[schemaCounter].sets,
                            reps: currSchema[schemaCounter].reps,
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
    // console.log(completeRoutine)
    return completeRoutine;
};


//Routine actions
let numRoutines = 0;
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
let numExercises = 0;
export const addExercise = (name, orm) => {
    return {
        type: 'ADD_EXERCISE',
        id: numExercises++,
        name,
        orm,
    };
};

export const editExercise = (id, editData) => {
    return {
        type: 'EDIT_EXERCISE',
        editData,
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