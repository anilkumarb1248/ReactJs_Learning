import React, { useEffect, useState } from 'react'
import useDocumentTitle from './useDocumentTitle';

function DocumentTitleTwo() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, [count])
    useDocumentTitle(count);

    return (
        <div>
            Document Title Two: {count}
            <button onClick={() => { setCount(prevCount => prevCount + 1) }}>Increment Count</button>
        </div>
    )
}

export default DocumentTitleTwo;
