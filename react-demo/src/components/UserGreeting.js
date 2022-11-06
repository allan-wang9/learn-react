//Conditional Rendering 

/*
- to show ot hide HTML based on various conditions 
- 2 common ways

- use a ternary operator in the format {function ? true statement : false statement}

- short circuit operator approach in format {function && true statement}   
- if first condition is true, we evaluate the second condition
- if first condition is false, there is no need to evaluate any further
*/

export const UserGreeting = () => {

    const isLoggedIn = false

    return (
    <div>
        Welcome {isLoggedIn && 'Allan'}
    </div>
    )
}