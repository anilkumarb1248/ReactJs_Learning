import { Greet } from "./Greet";
import { Person } from "./Person";
import { PersonList } from "./PersonList";

function BasicProps() {
  const personName = {
    first: "Hithiksha",
    last: "Bandari",
  };

  const nameList = [
    {
      first: "Anil Kumar",
      last: "Bandari",
    },
    {
      first: "Anusha",
      last: "Peddaboina",
    },
    {
      first: "Hithiksha",
      last: "Bandari",
    },
    {
      first: "Shreetan",
      last: "Bandari",
    },
  ];

  return (
    <div>
      <h2>*** Basic Props **** </h2>
      <Greet name="Anil" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default BasicProps;
