import React, { Component } from 'react';
import OneRepMaxCalculator from './components/OneRepMaxCalculator'
import ExerciseComponent from './components/ExerciseComponent'
import CalendarDay from './components/CalendarDay'
import StoreTest from './containers/test'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ExerciseComponent />
                <OneRepMaxCalculator />
                <CalendarDay />
                <StoreTest />

            </div>
        );

    }
}

export default App;
