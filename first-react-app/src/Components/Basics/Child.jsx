
const Child = ({onButtonClick, onGreet})=>{
    const name = "Anil Kumar";
    return(
        <>
            <h4>Hello from Child</h4>
            <button onClick={onButtonClick}>Click Me!</button>
             <button onClick={() => onGreet(name)}>Wish Me!</button>
        </>
    )
}

export default Child;