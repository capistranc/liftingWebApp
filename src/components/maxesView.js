/**
 * Created by chris on 2/7/17.
 */
import React from 'react';
const MaxesView = props => {
    const {exercises} = props;
    return (
        <div className='container'>
            <table>
                <tr>
                    <th>Exercise</th>
                    <th>1RM</th>
                </tr>
                {exercises.map(ex => <MaxRow {...{exercise: ex}} />)}
            </table>
        </div>
    );
};

const MaxRow = (props) => {
    const {exercise} = props;
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{parseInt(exercise.orm,10)}</td>
        </tr>
    )
};

export default MaxesView;


