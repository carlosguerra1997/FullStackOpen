import { deleteContact } from "./services/Contacts"

import { getContacts } from "./services/Contacts"

export const Contact = ({ contact, setContacts, setContactsFilter, setSuccess }) => {
    const { id, name, number } = contact

    const handleDelete = async () => {
        const response = window.confirm(`Delete ${name}?`)
        if ( response ) {
            const contactDeleted = await deleteContact(id)
            const phoneBookContacts = getContacts().then( data => {
                setContacts(data)
                setContactsFilter(data)
            })
            setSuccess(true)
            setTimeout( () => {
                setSuccess(false)
            }, 3000)
        }
    }

    return (
        <div>
            <p> { name }: { number } </p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}