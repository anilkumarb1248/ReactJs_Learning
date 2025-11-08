
import { add, multiply } from "./Utility";

function Test(){

  const person = {
    name: 'Anil',
    age: 35,
  }


    return(
        <>
            <p>Calling Utility Methods </p>
            Add: {add(10,20)} <br/>
            Mulitply: {multiply(5,10)} <br/>
            {/* <p>{{person}}</p> */}
        </>
        )
}

export default Test;