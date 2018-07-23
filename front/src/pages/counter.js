import React from 'react'
import { connect } from 'react-redux'

import { counter as changeCounter } from '../redux/actions'



const CounterView = ({ counter, changeCounter }) => (
  <div>
    <p>counter: {counter}</p>
    <button onClick={() => changeCounter(counter + 1)}>plus</button>
    <button onClick={() => changeCounter(counter - 1)}>minus</button>
  </div>
)


export default connect(
  (state) => ({ counter: state.counter }),
  { changeCounter }
)(CounterView)