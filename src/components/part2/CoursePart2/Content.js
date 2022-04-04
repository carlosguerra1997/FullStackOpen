import { Part } from "./Part"

export const Content = ({ parts }) => {
    const exercises = parts.reduce(( acc, part ) => acc + part.exercises, 0 )

    return (
        <>
            {
                parts.map( part => <Part key={part.id} part={part} /> )
            }
            <h3> Total of { exercises } exercises </h3>
        </>
    )
}