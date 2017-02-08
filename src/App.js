import React, { Component } from 'react';
import OneRepMaxCalculator from './Components/OneRepMaxCalculator'
import ExerciseComponent from './Components/ExerciseComponent'
import CalendarDay from './Components/CalendarDay'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ExerciseComponent />
                <OneRepMaxCalculator />
                <CalendarDay />

            </div>
        );

    }
}

export default App;
