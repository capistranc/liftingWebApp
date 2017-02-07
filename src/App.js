import React, { Component } from 'react';
import OneRepMaxCalculator from './Components/OneRepMaxCalculator'
import ExerciseComponent from './Components/ExerciseComponent'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ExerciseComponent />
                <OneRepMaxCalculator />
            </div>
        );

    }
}

export default App;
