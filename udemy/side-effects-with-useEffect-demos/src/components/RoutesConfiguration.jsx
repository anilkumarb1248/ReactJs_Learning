import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BasicDemos from "./BasicDemos/BasicDemos";
import UdemyDemos from "./UdemyDemos/UdemyDemos";
import NoRouteMatch from "./NoRouteMatch";
import StaleBehaviourDemo from "./BasicDemos/demos/StaleBehaviourDemo";
import DocumentTitleUpdateWithCounter from "./BasicDemos/demos/DocumentTitleUpdateWithCounter";
import RunEffectConditionally from "./BasicDemos/demos/RunEffectConditionally";
import RunEffectOnlyOnce from "./BasicDemos/demos/RunEffectOnlyOnce";
import EffectWithCleanup from "./BasicDemos/demos/EffectWithCleanup";
import EffectWithIncorrectDeps from "./BasicDemos/demos/effectWithIncorrectDeps";
import MultipleEffects from "./BasicDemos/demos/MultipleEffects";
import FetchingData from "./BasicDemos/demos/FetchingData";
import UseMemoDemos from "./UseMemoDemos/UseMemoDemos";
import UseCallbackDemos from "./UseCallbackDemos/UseCallbackDemos";

function RoutesConfiguration() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="basicDemos" element={<BasicDemos />}>
        <Route
          path="documentTitleUpdateWithCounter"
          element={<DocumentTitleUpdateWithCounter />}
        ></Route>
        <Route
          path="runEffectConditionally"
          element={<RunEffectConditionally />}
        ></Route>
        <Route path="runEffectOnlyOnce" element={<RunEffectOnlyOnce />}></Route>
        <Route path="effectWithCleanup" element={<EffectWithCleanup />}></Route>
        <Route
          path="effectWithIncorrectDeps"
          element={<EffectWithIncorrectDeps />}
        ></Route>
        <Route path="multipleEffects" element={<MultipleEffects />}></Route>
        <Route path="fetchingData" element={<FetchingData />}></Route>
        <Route path="staleBehaviour" element={<StaleBehaviourDemo />}></Route>
      </Route>
      <Route path="udemyDemos" element={<UdemyDemos />} />
      <Route path="useMemoDemos" element={<UseMemoDemos />} />
      <Route path="useCallbackDemos" element={<UseCallbackDemos />} />
      <Route path="*" element={<NoRouteMatch />} /> // Should be last
    </Routes>
  );
}

export default RoutesConfiguration;
