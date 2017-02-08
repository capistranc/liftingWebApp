/**
 * Created by chris on 2/8/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addRoutine } from '../actions'

let storeTest = ({ dispatch }) => {
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch(addRoutine())
            }}>
                <button type="submit">
                    test store
                </button>
            </form>
        </div>
    )
};
storeTest = connect()(storeTest);

export default storeTest