/**
 * Created by chris on 2/7/17.
 */
/* eslint-disable */

import React, { Component } from 'react';


const BryzckiMax = (weight, reps) => { //Conservative
    weight = parseInt(weight,10);
    reps = parseInt(reps,10);
    var max = weight / (1.0278 - (0.0278*reps))

    return parseInt(max, 10);
};


const LanderMax = (weight, reps) => { //MiddleGround eslint-disable-next-line
    weight = parseInt(weight, 10);
    reps = parseInt(reps, 10);

    var max = weight / (1.013 - (0.267123 * reps));
    return parseInt(max, 10);
}


const EpleyMax= (weight, reps) => { //Ambitious eslint-disable-next-line
    weight = parseInt(weight, 10);
    reps = parseInt(reps, 10);
    var max = weight*reps*.033 + weight;

    return parseInt(max, 10);
};


class OneRepMaxCalculator extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset= this.handleReset.bind(this);

        this.state = {
            weight: 0,
            reps: 0,
            orm: 0,
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        const max = BryzckiMax(this.state.weight, this.state.reps)
        this.setState({orm: max});
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;

        this.setState({[name]: target.value})
    }

    handleReset(e) {
        e.preventDefault();
        this.setState({weight: 0, reps: 0, orm: 0})
    }

    render() {
        return (
            <div className='container well'>
                <form onSubmit={this.handleSubmit}>
                    <label> Weight Lifted  <input type='number' min='1' max='9999' name='weight' onChange={this.handleChange} value={this.state.weight}/></label>
                    <label title='Enter up to 20 reps'>  Reps Performed <input type='number' min='1' max='20' name='reps' onChange={this.handleChange} value={this.state.reps}/> </label>
                    <button className='btn btn-success' >Calculate </button> <button className='btn btn-warning' onClick={this.handleReset}> Reset </button>

                </form> <br />

                <div className='well'>
                    <h5>One Rep Max: <input maxLength='2' type='text' value={this.state.orm} /></h5> <br/>

                    <div className="row">
                        <div className="col-sm-6">

                            <div>
                                50% <input min='0' max='9999' type='number' value={parseInt(this.state.orm*.50, 10)} />
                                55% <input min='0' max='9999' type='number' value={parseInt(this.state.orm*.55, 10)} />
                            </div>
                            <div>
                                60% <input min='0' max='9999' type='number' value={parseInt(this.state.orm*.60, 10)} />
                                65% <input min='0' max='9999' type='number' value={parseInt(this.state.orm*.65, 10)} />
                            </div>
                            <div>
                                70% <input min='0' max='9999' type='number' value={parseInt(this.state.orm*.70, 10)} />
                                75% <input min='0' max='9999' type='number' value={parseInt(this.state.orm*.75, 10)} />
                            </div>
                            <div>
                                80% <input min='0' max='9999' type='number' value={parseInt(this.state.orm*.80, 10)} />
                                85% <input min='0' max='9999' type='number' value={parseInt(this.state.orm*.85, 10)} />
                            </div>
                            <div>
                                90% <input min='0' max='9999' type='number' value={parseInt(this.state.orm*.90, 10)} />
                                95% <input min='0' max='9999' type='number' value={parseInt(this.state.orm*.95, 10)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OneRepMaxCalculator;


//could be 2400-3200 calories depending on size of sandwich, good macro nutrient spread,
//