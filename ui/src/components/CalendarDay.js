import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// dayLog = log.getTop();


export default class CalendarDay extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {wod, onNextClick, onPrevClick, profile} = this.props;
        return (
            <div>
                <div className="well text-center">
                    <div className='text-center'>Viewing Workout {profile.dayView+1} of {profile.program.length}
                        {(profile.dayView == profile.dayOfProgram) && <span>(Current Day)</span> }</div>
                    <button className='btn' onClick={(e) => onPrevClick(profile)}>Prev</button>
                    <button className='btn' onClick={(e) => onNextClick(profile)}>Next</button>
                </div>

                <DayViewer {...this.props} />
            </div>
        );
    }
}

const DayViewer = (props) => {
    const {wod} = props;
    return (
        <BootstrapTable data={wod}>
            <TableHeaderColumn dataField='id' isKey={ true }></TableHeaderColumn>
            <TableHeaderColumn dataField='lift'>Exercise</TableHeaderColumn>
            <TableHeaderColumn dataField='goal'>Goal</TableHeaderColumn>
            <TableHeaderColumn dataField='difficulty'> Difficulty </TableHeaderColumn>
        </BootstrapTable>
    )
};