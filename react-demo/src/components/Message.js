import {useState} from 'react'

export const Message = (props) => {

    //message is a variable 
    //setMessage is a function used to modify the message variable
    //use state is provided an initial value 
    const [message, setMessage] = useState('Welcome visiter!')
    
    //state -> variable maintained inside a component
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thanks for subscribing.')}>Subscribe</button>
        </div>     
    )
}

