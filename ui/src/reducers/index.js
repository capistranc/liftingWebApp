/**
 * Created by chris on 2/8/17.
 */
import { combineReducers } from 'redux'
import exercises from './exercises'
import routines from './routines'
import profile from './profile'
import {reducer as formReducer} from 'redux-form'
import {routerReducer } from 'react-router-redux'

const routineApp = combineReducers({
    exercises,
    routines,
    profile,
    form: formReducer,
    routing: routerReducer
});
export default routineApp