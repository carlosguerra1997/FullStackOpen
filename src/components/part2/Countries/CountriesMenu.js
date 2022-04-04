import axios from "axios"
import { useEffect, useState } from "react"

import { apiRoutes } from "./api/apiRoutes"
import { Countries } from "./Countries"

export const CountriesMenu = () => {
    const [ countries, setCountries ] = useState([])
    const [ searchedCountry, setSearchedCountry ] = useState('')
    const [ foundCountry, setFoundCountry ] = useState([])

    useEffect( () => {
        axios.get(apiRoutes.allCountries).then( res => {
            setCountries(res.data)
        })
    }, [])

    useEffect( () => {
        const foundCountries = countries.filter( country => country.name.common.includes(searchedCountry) )
        setFoundCountry(foundCountries)
    }, [ countries, searchedCountry ])

    const handleCountrySearch = e => {
        setSearchedCountry(e.target.value)
    }

    return (
        <div>
            <form>
                <p>Find countries</p>
                <input value={searchedCountry} onChange={handleCountrySearch} />
            </form>
            {
                foundCountry.length === 0 || foundCountry.length > 10
                    ? <p> Too many matches, specify another filter </p>
                    : <Countries foundCountry={foundCountry} />
            }
        </div>
    )
}