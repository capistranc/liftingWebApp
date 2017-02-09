import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// dayLog = log.getTop();


export default class CalendarWeek extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {week, onNextClick, onPrevClick, profile} = this.props;
        console.log(week);
        var view = profile.dayView;
        return (
            <div className='text-center'>
                <div className="well">
                    <p>Viewing Week {parseInt(profile.dayView/3, 10)+1} of {parseInt(profile.program.length/3,10)} </p>
                    <button onClick={(e) => onPrevClick(profile)}>Prev</button>
                    <button onClick={(e) => onNextClick(profile)}>Next</button>
                </div>

                {week.map(day => <DayViewer  {...{wod: day, view: ++view, profile}} />)}

            </div>
        );
    }
}

const DayViewer = (props) => {
    const {wod, view, profile} = props;
    return (
        <div>
            <p>Workout {view} of {profile.program.length}
                {((view-1) == profile.dayOfProgram) && <span>(Current Day)</span> }</p>

            <BootstrapTable data={wod}>
                <TableHeaderColumn dataField='id' isKey={ true }></TableHeaderColumn>
                <TableHeaderColumn dataField='lift'>Exercise</TableHeaderColumn>
                <TableHeaderColumn dataField='goal'>Goal</TableHeaderColumn>
                <TableHeaderColumn dataField='difficulty'> Difficulty </TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
};