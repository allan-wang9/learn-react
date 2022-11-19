import { useState } from "react"

export const Form = () => {

    const [username, setUsername] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(` The username: ${username} was submitted.`)
    }

    return( 
    <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={username} onChange = {
                (event) => setUsername(event.target.value)
            }
            ></input>
        </div>
        <button type='submit'>Submit</button>
    </form>
    )
}