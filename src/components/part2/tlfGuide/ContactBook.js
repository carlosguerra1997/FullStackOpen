import axios from "axios"
import { useEffect, useState } from "react"

import { Contact } from "./Contact"
import { ContactFilter } from "./ContactFilter"
import { ContactForm } from "./ContactForm"

export const ContactBook = () => {
    useEffect( () => {
        axios.get('http://localhost:3001/contacts').then( response => {
        setContacts(response.data)
        setContactsFilter(response.data)
        })
    }, [])
    
    const [ contacts, setContacts ] = useState([])
    const [ addContact, setAddContact ] = useState('')
    const [ addNumber, setNumber ] = useState(0)
    const [ filterContact, setFilterContact ] = useState('')
    const [ contactFilter, setContactsFilter ] = useState([])

    const handleFilter = e => {
        setFilterContact( e.target.value )
        const contactsFiltered = contacts.filter( contact => contact.name.toLowerCase().includes(e.target.value.toLowerCase()) )
        setContactsFilter(contactsFiltered)
    }

    const handleAddContact = e => {
        e.preventDefault()
        const contactExist = contacts.filter( contact => contact.name === addContact )
        if (contactExist.length) return alert(`${addContact} is already added to the phonebook`)
        setContacts([ ...contacts, { name: addContact, number: addNumber } ])
        setContactsFilter([ ...contacts, { name: addContact, number: addNumber } ])
    }

    const handleChangeContact = e => {
        setAddContact(e.target.value)
    }

    const handleChangeNumber = e => {
        setNumber(e.target.value)
    }

    return (
        <>
            <h2> Phonebook </h2>
            <ContactFilter 
                filterContact={filterContact}
                handleFilter={handleFilter}
            />
            <ContactForm 
                addContact={addContact}
                addNumber={addNumber}
                handleAddContact={handleAddContact}
                handleChangeContact={handleChangeContact}
                handleChangeNumber={handleChangeNumber}
            />
            <h2> Numbers </h2>
            { contactFilter.length && contactFilter.map( contact => <Contact key={contact.name} contact={contact} /> ) }
        </>
    )
}