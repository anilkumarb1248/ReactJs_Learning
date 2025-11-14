
import React from 'react'
import CounterClassComp from './CounterClassComp';
import CounterFunctionComp from './CounterFunctionComp';
import InputTextComp from './InputTextComp';
import PreviousStateCounterComp from './PreviousStateCounterComp';
import ObjectsStateComp from './ObjectsStateComp';
import ArrayStateComp from './ArrayStateComp';

function UseStateDemosComp() {
  return (
    <div>
      <h2>UseState Demos Component</h2>
      <CounterClassComp />
      <CounterFunctionComp />
      <InputTextComp />
      <PreviousStateCounterComp />
      <ObjectsStateComp />
      <ArrayStateComp/>
    </div>
  )
}

export default UseStateDemosComp;
