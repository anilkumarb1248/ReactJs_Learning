import "./App.css";

// import MyClassComponent from "./Components/StateDemos/MyClassComponent";
// import StateDemos from "./Components/StateDemos/StateDemos";
// import EventHandlingDemos from "./Components/EventHandlingDemos/EventHandlingDemos";
// import Communication from "./Components/Communication/Communication";
// import RenderingDemos from "./Components/Rendering/RenderingDemos";
// import LifeCycleDemos from "./Components/LifeCycleDemos/LifeCycleDemos";
// import PureComponentDemo from "./Components/PureComponentDemo/PureComponentDemo";
// import RefsDemos from "./Components/RefsDemos/RefsDemos";
// import PortalDemos from "./Components/PortalDemos/PortalDemos";
// import ErrorBoundaryDemos from "./Components/ErrorBoundaryDemos/ErrorBoundaryDemos";
// import HOCDemos from "./Components/HOCDemos/HOCDemos";
// import RenderPropsDemos from "./Components/RenderPropsDemos/RenderPropsDemos";
// import ContextDemos from "./Components/ContextDemos/ContextDemos";
import BasicsDemos from "./Components/Basics/BasicsDemos";

function App() {
  // const student = {
  //   name: "Anil Kumar Bandari",
  //   standard: "5th",
  //   grade: "D",
  // };

  // const profile = {
  //   // Basic Personal Information
  //   firstName: "Anil Kumar",
  //   lastName: "Bandari",
  //   fullName: "Anil Kumar Bandari",
  //   age: "35",
  //   gender: "Male",
  //   dateOfBirth: "11 May 1990",
  //   // Contact Information
  //   email: "abc@test.com",
  //   phoneNumber: "9876543210",
  //   address: "Patancheru",
  //   city: "Hyderabad",
  //   state: "Telangana",
  //   country: "India",
  //   zipCode: "123456",
  // };

  return (
    <div className="App">
      <BasicsDemos />
      {/* <h1>Hello Bandari, Welcome to React Learning!</h1> */}
      {/* <Greet/> */} {/* Functional Component*/}
      {/*<Welcome/> */} {/* Class Component*/}
      {/* <Test/>*/}
      {/* <Student name="Anil" standard="5th" grade="C"/>
          <Student name="Manasvi" standard="10th" grade="A"/>
          <Student name="Hithiksha" standard="UKG" grade="A"/>
          <Student name="Shreetan" standard="Nursery" grade="B"/> */}
      {/* <Student student={student}/> */}
      {/* <Parent/> */}
      {/* <Profile profile={profile}/> */}
      {/* <Greet name="Anil" role="SE">
            <h4> Welcome to the company</h4>
          </Greet>
          <Greet name="Manasvi" role="TL">
            <button>Assign Tasks</button>
          </Greet>
          <Greet name="Hithiksha" role="CEO">
            <Welcome></Welcome>
          </Greet>
          <Greet name="Shreetan" role="Manager"></Greet> */}
      {/* <FruitList/> */}
      {/* <Products/> */}
      {/* <EmployeeData/> */}
      {/* <Welcome name='Anil Kumar' company='ABC'/>
          <MyClassComponent/> */}
      {/* <StateDemos/> */}
      {/* <EventHandlingDemos/> */}
      {/* <Communication/> */}
      {/* <RenderingDemos/> */}
      {/* <LifeCycleDemos/> */}
      {/* <PureComponentDemo/> */}
      {/* <RefsDemos/> */}
      {/* <PortalDemos/> */}
      {/* <ErrorBoundaryDemos/> */}
      {/* <HOCDemos/> */}
      {/* <RenderPropsDemos/> */}
      {/* <ContextDemos/> */}
    </div>
  );
}

export default App;
