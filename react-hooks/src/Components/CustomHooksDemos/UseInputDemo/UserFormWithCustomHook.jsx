import React from 'react'
import useInput from './useInput'

function UserFormWithCustomHook() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitUserForm = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
    }

    return (
        <div>
            <h2>Form with Custom Input Hook</h2>
            <form onSubmit={submitUserForm}>
                <div>
                    <label>First Name: </label>
                    <input type="text" {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" {...bindLastName} />
                </div>

                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default UserFormWithCustomHook
