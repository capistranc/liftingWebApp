/**
 * Created by chris on 2/8/17.
 */
import React from 'react';
import ExerciseMaxForm  from '../components/ExerciseMaxForm'
import OneRepMaxForm from '../components/OneRepMaxForm'
import {updateORM} from '../actions'
import {formulaA,formulaB,formulaC} from '../components/ormFormulas'
import CalculatorViewer from '../components/calculatorViewer'
import { connect } from 'react-redux'


class ExerciseMaxes extends React.Component {
    constructor() {
        super();
        this.state = {
            exerciseId: undefined,
            orm: 0,
        };
    }

    handleSubmit = (values) => {
        console.log(values);
        if (values.exercise !== undefined) {
            this.setState({exerciseId: values.exercise});

        }
        if (values.weight && values.reps) {
            this.setState({orm: formulaA(values.weight,values.reps)} );
        }
    };


    render() {
        const {handleUpdate} = this.props;
        return (
            <div>
                <ExerciseMaxForm onSubmit={this.handleSubmit} {...this.props}/>
                <CalculatorViewer {...this.state} />
                <form onSubmit={(e) => handleUpdate(e,this.state.exerciseId, this.state.orm)}>
                    <button type='submit'>Update 1RM</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        exercises: state.exercises,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpdate: (e,id, weight) => {
            e.preventDefault();
            dispatch(updateORM(id,weight)) },
    };
};

const ExerciseMaxesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseMaxes);


export default ExerciseMaxesContainer