export const ChildComponent = (props) => {
    return(
        <div>
            <button onClick={() => props.greetHandler('child named lil timmy')}>Greet the parent</button>
        </div>
    )

}