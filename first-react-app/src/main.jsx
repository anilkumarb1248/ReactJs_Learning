import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)



//// ******************** Creating a React root node using ReactDOM ********************
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h2>Hello Anil Kumar Bandari, Welcome to React Learning…</h2>)


//// ******************** Creating a React root node using createRoot() built in function ********************
// import { createRoot } from 'react-dom/client'

// const root = createRoot(document.getElementById("root"));
//root.render(<h2>Hello Anil Kumar Bandari, Welcome to React Learning…</h2>)

//// Code to verify react only updates the changed content, not whole UI.
//// In this example, If you see in the browser tools, it will only updates the time,
//// instead of updating the whole UI like div, h2 and h3.
// function tick(){
//   root.render(
//     <div>
//       <h2> Hello Bandari </h2>
//       <h3>It is {new Date().toLocaleTimeString()}</h3>
//     </div>
//   )
// }
// setInterval(tick,1000)

// function Welcome(props){
//   return <h1>Hello {props.name}, Welcome to the React Learning</h1>
// }

// root.render(<Welcome name="Anil"/>)