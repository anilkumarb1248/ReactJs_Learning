
import React from 'react'

function SubmissionForm() {
    const handleSubmit = (e) => {
        // This stops the browser from performing its default action 
        // (which is submitting the form and reloading the page)
        e.preventDefault(); // line 1

        alert('Form submission intercepted! No page reload occurred.');
        // You would typically handle form data submission here (e.g., an API call)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Submit Form</button>
        </form>
    );
}

export default SubmissionForm;
