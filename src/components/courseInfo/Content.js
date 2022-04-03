import { Part } from "./Part"

export const Content = ({ course }) => {
    const { parts } = course;
    return (
        <>
            { 
                parts.map( part => <Part
                    key={part.name}
                    name={part.name} 
                    exercises={part.exercises} 
                /> ) 
            }
        </>
    )
}