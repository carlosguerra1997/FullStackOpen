export const ContactForm = ({ name, number, handleAddContact, handleChange }) => {
    return (
        <>
            <form onSubmit={handleAddContact}>
                    <h2> Add new </h2>
                    <div>
                        <p>Name:</p>
                        <input id={name} name="name" value={name} onChange={handleChange} />
                    </div>
                    <div>
                        <p>Number:</p>
                        <input id={number} name="number" value={number} onChange={handleChange} />
                    </div>
                    <div>
                        <button type='submit'> Add Contact </button>
                    </div>
                </form>
        </>
    )
}