import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BasicDemos from "./BasicDemos/BasicDemos";
import UdemyDemos from "./UdemyDemos/UdemyDemos";
import NoRouteMatch from "./NoRouteMatch";
import ContextDemos from "./BasicDemos/ContextDemos/ContextDemos";
import UseReducerDemos from "./BasicDemos/UseReducerDemos/UseReducerDemos";
import ClassComponentDemos from "./BasicDemos/ContextDemos/ClassComponentDemos/ClassComponentDemos";
import FunctionalComponentDemos from "./BasicDemos/ContextDemos/FunctionalComponentDemos/FunctionalComponentDemos";
import UdemyContextExerciseDemo from "./UdemyDemos/UdemyContextExercise/UdemyContextExerciseDemo";
import BasicCounterDemo from "./BasicDemos/UseReducerDemos/BasicCounterDemo";
import ComplexCounterStateDemo from "./BasicDemos/UseReducerDemos/ComplexCounterStateDemo";
import MultipleReducersDemo from "./BasicDemos/UseReducerDemos/MultipleReducersDemo";
import UseReducerWithContextDemos from "./BasicDemos/UseReducerWithContextDemos/UseReducerWithContextDemos";
import FetchingDataByUseReducerDemo from "./BasicDemos/UseReducerDemos/FetchingDataByUseReducerDemo/FetchingDataByUseReducerDemo";

function RoutesConfiguration() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="basicDemos" element={<BasicDemos />}>
        <Route path="contextDemos" element={<ContextDemos />}>
          <Route
            path="classComponentDemos"
            element={<ClassComponentDemos />}
          ></Route>
          <Route
            path="functionalComponentDemos"
            element={<FunctionalComponentDemos />}
          ></Route>
        </Route>
        <Route path="useReducerDemos" element={<UseReducerDemos />}>
          <Route path="basicCounterDemo" element={<BasicCounterDemo />} />
          <Route
            path="complexCounterStateDemo"
            element={<ComplexCounterStateDemo />}
          />
          <Route
            path="multipleReducersDemo"
            element={<MultipleReducersDemo />}
          />
          <Route
            path="fetchingDataByUseReducerDemo"
            element={<FetchingDataByUseReducerDemo />}
          />
        </Route>
        <Route
          path="useReducerWithContextDemos"
          element={<UseReducerWithContextDemos />}
        ></Route>
      </Route>
      <Route path="udemyDemos" element={<UdemyDemos />} />
      <Route
        path="udemyContextExercise"
        element={<UdemyContextExerciseDemo />}
      />
      <Route path="*" element={<NoRouteMatch />} /> // Should be last
    </Routes>
  );
}

export default RoutesConfiguration;
