import './App.css'
import {Greet} from './components/Greet'

function App() {
    return (
        <div className="App">
            <Greet name='Allan' age='23' />
            <Greet name='Tim' age='50'> 
                <p>This is a children prop</p>
            </Greet>
        </div>
    )
}

export default App