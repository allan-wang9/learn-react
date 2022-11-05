export const Greet = (props) => {
    return( 
        <div>
            <h1>
                Hello {props.name} who is {props.age} 
            </h1>
            {props.children}
        </div>
    )
}