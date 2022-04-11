import { useEffect, useState } from "react"

import { addNewContact, getContacts, updateContact } from "./services/Contacts"

import { Contact } from "./Contact"
import { ContactFilter } from "./ContactFilter"
import { ContactForm } from "./ContactForm"
import { SuccessMessage } from "./SuccessMessage"

export const ContactBook = () => {    
    const [ contacts, setContacts ] = useState([])
    const [ filterContact, setFilterContact ] = useState('')
    const [ contactFilter, setContactsFilter ] = useState([])
    const [ success, setSuccess ] = useState(false)
    const [ newContact, setNewContact ] = useState({ name: '', number: 0 })
    const { name, number } = newContact

    useEffect( () => {
        const phoneBookContacts = getContacts().then( data => {
            setContacts(data)
            setContactsFilter(data)
        })
    }, [ newContact ])

    const handleFilter = e => {
        setFilterContact( e.target.value )
        const contactsFiltered = contacts.filter( contact => contact.name.toLowerCase().includes(e.target.value.toLowerCase()) )
        setContactsFilter(contactsFiltered)
    }

    const handleAddContact = e => {
        e.preventDefault()
        const contactExist = contacts.filter( contact => contact.name === name )
        if (contactExist.length) {
            const response = window.confirm(`${newContact.name} is already added to phonebook, replace the old number with a new one?`)
            if ( response ) {
                console.log(contactExist[0].id)
                updateContact(contactExist[0].id, newContact)
            }
        } else {
            addNewContact(newContact)
        }
        setSuccess(true)
        setTimeout( () => {
            setSuccess(false)
        }, 3000)
        setNewContact({ name: '', number: 0 })
    }

    const handleChange = e => {
        setNewContact({
            ...newContact,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <h2> Phonebook </h2>
            {
                success && <SuccessMessage newContact={newContact} />
            }
            <ContactFilter 
                filterContact={filterContact}
                handleFilter={handleFilter}
            />
            <ContactForm 
                name={name}
                number={number}
                handleAddContact={handleAddContact}
                handleChange={handleChange}
            />
            <h2> Numbers </h2>
            { contactFilter.length && contactFilter.map( contact => <Contact key={contact.name} contact={contact} setContacts={setContacts} setContactsFilter={setContactsFilter} setSuccess={setSuccess} /> ) }
        </>
    )
}