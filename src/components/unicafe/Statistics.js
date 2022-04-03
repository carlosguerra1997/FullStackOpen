export const Statistics = ({ good, neutral, bad, total }) => {
    return (
        <div>
            { total > 0 ?
                <>
                    <h1>Statistics</h1>
                    <p> Good: { good } </p>
                    <p> Neutral: { neutral } </p>
                    <p> Bad: { bad } </p>
                    <p> All: { total } </p>
                    <p> Average: { ( good - bad ) / total  } </p>
                    <p> Positive: { (good / total) * 100 }% </p>
                </> :
                <p> No feedback given </p>
            }
        </div>
    )
}