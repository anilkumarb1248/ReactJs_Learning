import './App.css'
import CustomHooksDemosComp from './Components/CustomHooksDemos/CustomHooksDemosComp'
import OtherImpHooksDemosComp from './Components/OtherImpHooksDemos/OtherImpHooksDemosComp'
import UseCallbackDemosComp from './Components/UseCallbackDemos/UseCallbackDemosComp'
import UseContextDemosComp from './Components/UseContextDemos/UseContextDemosComp'
import UseEffectDemosComp from './Components/UseEffectDemos/UseEffectDemosComp'
import UseMemoDemosComp from './Components/UseMemoDemos/UseMemoDemosComp'
import UseReducerDemosComp from './Components/UseReducerDemos/UseReducerDemosComp'
import UseRefDemosComp from './Components/UseRefDemos/UseRefDemosComp'
import UseStateDemosComp from './Components/UseStateDemos/UseStateDemosComp'

function App() {

  return (
    <div className="App">
      {/* <UseStateDemosComp /> */}
      {/* <UseEffectDemosComp /> */}
      {/* <UseContextDemosComp /> */}
      {/* <UseReducerDemosComp /> */}
        {/* <UseCallbackDemosComp /> */}
      {/* <UseMemoDemosComp /> */}
      {/* <UseRefDemosComp /> */}
      {/* <OtherImpHooksDemosComp /> */}
      <CustomHooksDemosComp />
    </div>
  )
}

export default App
