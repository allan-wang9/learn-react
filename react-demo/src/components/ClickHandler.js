export const ClickHandler = () => {
    
    const clickHandler = (event) => {
        console.log("Button clicked.", event)
    }
    
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}