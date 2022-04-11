import axios from "axios"

export const addNewContact = async (contact) => {
    try {
        const newContact = await axios.post('http://localhost:3001/contacts', contact)
        return newContact
    } catch (error) {
        return error
    }
}

export const getContacts = () => {
    try {
        const request = axios.get('http://localhost:3001/contacts')
        return request.then(res => res.data)
    } catch (error) {
        return error
    }
}

export const updateContact = async (id, contact) => {
    try {
        const request = await axios.put(`http://localhost:3001/contacts/${id}`, contact)
        return request.then(res => res.data)
    } catch (error) {
        return error
    }
}

export const deleteContact = async (id) => {
    try {
        const request = await axios.delete(`http://localhost:3001/contacts/${id}`)
        return request.then(res => res.data)
    } catch (error) {
        return error
    }
}