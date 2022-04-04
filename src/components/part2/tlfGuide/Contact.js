export const Contact = ({ contact }) => {
    const { name, number } = contact

    return (
        <p> { name }: { number } </p>
    )
}