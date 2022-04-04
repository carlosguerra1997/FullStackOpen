export const Country = ({ country }) => {
    const { name: { common } } = country

    return (
        <div>
            { common }
        </div>
    )
}