export const ContactForm = ({ addContact, addNumber, handleAddContact, handleChangeContact, handleChangeNumber }) => {
    return (
        <>
            <form onSubmit={handleAddContact}>
                    <h2> Add new </h2>
                    <div>
                        <p>Name:</p>
                        <input value={addContact} onChange={handleChangeContact} />
                    </div>
                    <div>
                        <p>Number:</p>
                        <input value={addNumber} onChange={handleChangeNumber} />
                    </div>
                    <div>
                        <button type='submit'> Add Contact </button>
                    </div>
                </form>
        </>
    )
}