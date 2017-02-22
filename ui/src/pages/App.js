import React, { Component } from 'react';
// import ExerciseComponent from './components/ExerciseComponent'
import CalendarDayContainer from '../containers/CalendarDayContainer'
import StoreTest from '../containers/test'
import ExerciseMaxContainer from '../containers/ExerciseMaxContainer'
import CalendarWeekContainer from '../containers/CalendarWeekContainer'



class App extends Component {
    render() {
        return (
            <div className="App container well">

                <ExerciseMaxContainer/>
                <StoreTest />
                {/*<CalendarWeekContainer/>*/}
                <CalendarDayContainer />

            </div>
        );

    }
}

export default App;
