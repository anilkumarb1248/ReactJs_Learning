
import React from 'react'

function MemoComp({name}) {
    console.log("Memo Component is rendering")
  return (
    <div>
      <h3> Memo Component: {name} </h3>
    </div>
  )
}
// export default MemoComp;
export default React.memo(MemoComp);
//or
// const memoizedComponent = React.memo(MemoComp);
// export default memoizedComponent;
