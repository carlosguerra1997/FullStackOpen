import { useState } from "react"

import { Button } from "./Button"
import { Statistic } from "./Statistic"
import { Statistics } from "./Statistics"

export const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const handleGood = () => {
        setGood( good + 1 )
        setTotal( total + 1)
    }

    const handleNeutral = () => {
        setNeutral( neutral + 1 )
        setTotal( total + 1)
    }

    const handleBad = () => {
        setBad( bad + 1 )
        setTotal( total + 1)
    }

    return (
        <>
            <div>
                <h1>Give feedback</h1>
                <Button handleClick={ handleGood } text='Good' />
                <Button handleClick={ handleNeutral } text='Neutral' />
                <Button handleClick={ handleBad } text='Bad' />
            </div>
            { total > 0 ?
                <> 
                    <Statistic text='Good' value={good} />
                    <Statistic text='Neutral' value={neutral} />
                    <Statistic text='Bad' value={bad} />
                    <Statistic text='Total' value={total} />
                    <Statistic text='Average' value={ (good - bad) / total } />
                    <Statistic text='Positive' value={ `${(good / total) * 100}%` } />
                </> :
                <p> No feedback given </p>
            }
        </>
        
    )
}