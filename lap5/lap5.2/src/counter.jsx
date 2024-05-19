// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './action';

const Counter = ({ count, increment, decrement, reset }) => {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button class="btn btn-primary" onClick={increment} style={{marginRight:'5px'}}>+</button>
            <button class="btn btn-secondary" onClick={decrement} style={{marginRight:'5px'}}>-</button>
            <button class="btn btn-danger" onClick={reset}>Reset</button>
        </div>
    );
};


const mapStateToProps = (state) => ({
    count: state.count.count 
});

const mapDispatchToProps = {
    increment,
    decrement,
    reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
