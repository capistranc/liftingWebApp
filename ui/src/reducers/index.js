/**
 * Created by chris on 2/8/17.
 */
import { combineReducers } from 'redux'
import exercises from './exercises'
import routines from './routines'
import profile from './profile'
import {reducer as formReducer} from 'redux-form'

const routineApp = combineReducers({
    exercises,
    routines,
    profile,
    form: formReducer,
});
export default routineApp