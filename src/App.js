import React, { Component } from 'react';
import OneRepMaxCalculator from './Components/OneRepMaxCalculator'
import ExerciseComponent from './Components/ExerciseComponent'
import RoutineCalendar from './Components/RoutineGenerator'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ExerciseComponent />
                <OneRepMaxCalculator />
                <RoutineCalendar/>
            </div>
        );

    }
}

export default App;
