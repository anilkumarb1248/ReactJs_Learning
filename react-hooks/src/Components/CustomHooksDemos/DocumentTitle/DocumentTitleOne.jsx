
import React, { useEffect, useState } from 'react'
import useDocumentTitle from './useDocumentTitle';

function DocumentTitleOne() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, [count])

    useDocumentTitle(count);

    return (
        <div>
            Document Title One: {count}
            <button onClick={() => { setCount(prevCount => prevCount + 1) }}>Increment Count</button>
        </div>
    )
}
export default DocumentTitleOne;
