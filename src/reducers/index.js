/**
 * Created by chris on 2/8/17.
 */
import { combineReducers } from 'redux'
import exercises from './exercises'
import routines from './routines'
import profile from './profile'

const routineApp = combineReducers({
    exercises,
    routines,
    profile,
});
export default routineApp