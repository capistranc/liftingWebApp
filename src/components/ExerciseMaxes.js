/**
 * Created by chris on 2/9/17.
 */
import React from 'react';
import ExerciseMaxForm  from './ExerciseMaxForm'
import OneRepMaxForm from './OneRepMaxForm'
import {formulaA,formulaB,formulaC} from '../components/ormFormulas'
import CalculatorViewer from '../components/calculatorViewer'
import MaxesView from '../components/maxesView'


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
            this.setState({orm: formulaA(values.weight,values.reps)} );
        }
    };


    render() {
        const {handleUpdate, exercises} = this.props;
        return (
            <div>
                <ExerciseMaxForm onSubmit={this.handleSubmit} {...this.props}/>
                <div className="row">
                    <CalculatorViewer {...this.state} />
                    <MaxesView {...{exercises: exercises}} />
                </div>
                <form onSubmit={(e) => handleUpdate(e,this.state.exerciseId, this.state.orm)}>
                    <button type='submit'>Update 1RM</button>

                </form>
            </div>
        );
    }
}