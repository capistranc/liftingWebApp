/**
 * Created by chris on 2/7/17.
 */
import React from 'react';
const calculatorViewer = props => {
    const {orm} = props;
    return (
        <div className='container'>
            <div className='well'>
                <h5>One Rep Max: <input maxLength='5' type='text' value={orm} /></h5> <br/>
                <div className="row">
                    <div className="col-sm-6">

                        <div>
                            50% <input min='0' max='9999' type='number' value={parseInt(orm*.50, 10)} />
                            55% <input min='0' max='9999' type='number' value={parseInt(orm*.55, 10)} />
                        </div>
                        <div>
                            60% <input min='0' max='9999' type='number' value={parseInt(orm*.60, 10)} />
                            65% <input min='0' max='9999' type='number' value={parseInt(orm*.65, 10)} />
                        </div>
                        <div>
                            70% <input min='0' max='9999' type='number' value={parseInt(orm*.70, 10)} />
                            75% <input min='0' max='9999' type='number' value={parseInt(orm*.75, 10)} />
                        </div>
                        <div>
                            80% <input min='0' max='9999' type='number' value={parseInt(orm*.80, 10)} />
                            85% <input min='0' max='9999' type='number' value={parseInt(orm*.85, 10)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default calculatorViewer;
