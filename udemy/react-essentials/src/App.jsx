import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import UdemyCodeExcercises from "./components/UdemyCodeExcercises/UdemyCodeExcercises.jsx";

function App() {
  console.log("APP COMPONENT EXECUTING");
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
      <div>
        <h2>Udemy Code Excercises</h2>
        <UdemyCodeExcercises />
      </div>
    </div>
  );
}

export default App;
