

import React from 'react'

function UserMemoComp({ user }) {
    console.log("User Memo Component is rendering with user: {" + user.name + ", " + user.age + "}")
    return (
        <div>
            <h3>User Memo Component</h3>
            <p>Name: {user.name} Age: {user.age} </p>
        </div>
    )
}

export default React.memo(UserMemoComp, (prevProps, nextProps)=>{
    // This logic determines if the component should *skip* rendering
    if(prevProps.user.name !== nextProps.user.name || prevProps.user.age !== nextProps.user.age){
        return false; // The essential user data changed, so RENDER!
    }
    return true; // return true to tell React to SKIP re-rendering.
})
