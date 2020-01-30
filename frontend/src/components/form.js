import React from 'react'

function NewEventForm() {
    return (
        <main className="App-form">
            <form method='POST' action='http://localhost:9000/api/events'>
                <h2>Add new event</h2>
                <br/><br/>
                <input type='text' placeholder='first name' name='first_name' required/>
                <br/><br/>
                <input type='text' placeholder='last name' name='last_name' required/>
                <br/><br/>
                <input type='email' placeholder='email' name='email' required/>
                <br/><br/>
                <input type='date' name='date' required/>
                <br/><br/>
                <button>Submit</button>
            </form>
        </main>
    )
}

export default NewEventForm;