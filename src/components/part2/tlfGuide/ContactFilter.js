export const ContactFilter = ({ filterContact, handleFilter }) => {
    return (
        <>
            <p> Filter shown with </p>
            <input value={filterContact} onChange={handleFilter} />
        </>
    )
}