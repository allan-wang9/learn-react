import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {
    
    //function that alerts something
    const greetParent = (childName) => {
        alert(`Hello parent to ${childName}!`)
    }

    //returns a child (or another) component -> includes a prop that references greetParent
    return <ChildComponent greetHandler={greetParent}/>
}

//Called a function in the parent component from a button in the child component by passing the 
//function as a prop to the child component 