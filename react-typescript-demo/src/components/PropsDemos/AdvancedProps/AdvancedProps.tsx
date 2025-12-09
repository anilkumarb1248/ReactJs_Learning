import { Heading } from "./Heading";
import { OptionalPropGreet } from "./OptionalPropGreet";
import { Page } from "./Page";
import { Status } from "./Status";

function AdvancedProps() {
  return (
    <div>
      <h2>*** Advanced Props **** </h2>
      <Status status="loading" />
      <Heading> Placeholder Text </Heading>
      <Page>
        <Heading> React + TypeScript Learning Page </Heading>
      </Page>
      <OptionalPropGreet name="Anil" isLoggedIn={true} />
    </div>
  );
}

export default AdvancedProps;
