import React from 'react'
import SimpleCounterDemoComp from './SimpleCounterDemoComp';
import ComplexCounterDemoComp from './ComplexCounterDemoComp';
import MultipleReducerDemoComp from './MultipleReducerDemoComp';
import ReducerWithContextDemo from './ReducerWithContextDemo';
import DataFetchingUseStateDemo from './DataFetchingUseStateDemo';
import DataFetchingUseReducerDemo from './ChildComponents/DataFetchingUseReducerDemo';

function UseReducerDemosComp() {
  return (
    <div>
      <h2>UseReducer Demos Component</h2>
      {/* <SimpleCounterDemoComp/> */}
      {/* <ComplexCounterDemoComp/> */}
      {/* <MultipleReducerDemoComp/> */}
      {/* <ReducerWithContextDemo/> */}
      {/* <DataFetchingUseStateDemo/> */}
      <DataFetchingUseReducerDemo/>
    </div>
  )
}

export default UseReducerDemosComp;
