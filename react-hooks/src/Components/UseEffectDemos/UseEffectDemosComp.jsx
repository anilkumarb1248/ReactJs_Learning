import React from 'react'
import ClassCounterDemo from './ClassCounterDemo';
import HookCounterDemo from './HookCounterDemo';
import ConditionalClassCounterDemo from './ConditionalClassCounterDemo';
import ConditionalHookCounterDemo from './ConditionalHookCounterDemo';
import OnlyOnceHookCompDemo from './OnlyOnceHookCompDemo';
import MouseContainerComp from './MouseContainerComp';
import IntervalClassCounter from './IntervalClassCounter';
import IntervalFunctionalCounter from './IntervalFunctionalCounter';
import DataFetchingComp from './DataFetchingComp';
import DataFetchIndividualPosts from './DataFetchIndividualPosts';

function UseEffectDemosComp() {
  return (
    <div>
      <h2> UseEffect Demos Component </h2>
      {/* <ClassCounterDemo/> */}
      {/* <HookCounterDemo/> */}
      {/* <ConditionalClassCounterDemo/> */}
      {/* <ConditionalHookCounterDemo/> */}
      {/* <OnlyOnceHookCompDemo/> */}
      {/* <MouseContainerComp/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalFunctionalCounter/> */}
      {/* <DataFetchingComp/> */}
      <DataFetchIndividualPosts/>
    </div>
  )
}

export default UseEffectDemosComp;
