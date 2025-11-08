

const Book = (props) => {
    return(
        <>
            <h4>{props.title}</h4>
            <p>{props.author}</p>
        </>
        
    )
    // return (
    //     <>
    //         <h2> My Fauorate Books</h2>
    //         <section style={{ backgroundColor: 'red' }}>
    //             <h4>Mastering React</h4>
    //             <p>By Anthony Pham</p>
    //         </section>
    //         <section style={{ backgroundColor: 'green' }}>
    //             <h4>Mastering React</h4>
    //             <p>By Anthony Pham</p>
    //         </section>
    //         <section style={{ backgroundColor: 'blue' }}>
    //             <h4>Mastering React</h4>
    //             <p>By Anthony Pham</p>
    //         </section>
    //     </>
    // )
}

export default Book;