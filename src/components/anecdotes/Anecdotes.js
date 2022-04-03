import { useState } from "react"

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export const Anecdotes = () => {
    const [ selected, setSelected ] = useState(0)
    const [ votes, setVotes ] = useState(new Array(anecdotes.length).fill(0))
    
    const handleVote = () => {
        const votesUpdated = [ ...votes ]
        votesUpdated[selected] += 1
        setVotes([...votesUpdated])
    }

    const handleAnecdote = () => {
        setSelected(Math.round((Math.random() * ( anecdotes.length) )))
    }

    const mostVotedAnecdote = votes.reduce(( max, value, index, arr) => value > arr[max] ? index : max, 0 )

    return (
        <>
            <div>
                <h1> Anecdote of the day </h1>
                { anecdotes[selected] }
                <button onClick={handleVote}> Vote </button>
                <button onClick={handleAnecdote}> Next anecdote </button>
            </div>
            <div>
                <h1> Anecdote with most votes </h1>
                { anecdotes[mostVotedAnecdote] }
            </div>
        </>
    )
}