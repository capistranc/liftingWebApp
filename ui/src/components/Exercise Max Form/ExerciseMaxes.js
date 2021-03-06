/**
 * Created by chris on 2/9/17.
 */
import React from 'react';
import ExerciseMaxForm  from './ExerciseMaxForm'
import OneRepMaxForm from './OneRepMaxForm'
import {formulaA,formulaB,formulaC} from './ormFormulas'
import CalculatorViewer from './calculatorViewer'
import MaxesView from './maxesView'


export default class ExerciseMaxes extends React.Component {
    constructor() {
        super();
        this.state = {
            exerciseId: undefined,
            orm: 0,
        };
    }

    handleSubmit = (values) => {

        if (values.exercise !== undefined) {
            this.setState({exerciseId: values.exercise});

        }
        if (values.weight && values.reps) {
            this.setState({orm: formulaC(values.weight,values.reps)} );
        }
    };


    render() {
        const {handleUpdate, exercises} = this.props;

        return (
            <div>
                <ExerciseMaxForm onSubmit={this.handleSubmit} {...this.props}/>
                    <CalculatorViewer {...this.state} />
                    <MaxesView {...{exercises: exercises}} />
                <form onSubmit={(e) => handleUpdate(e,this.state.exerciseId, this.state.orm)}>
                    <button type='submit'>Update 1RM</button>

                </form>
            </div>
        );
    }
}