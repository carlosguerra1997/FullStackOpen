import { apiRoutes } from "./api/apiRoutes"
import axios from "axios"
import { useState } from "react"

import { Country } from './Country'

export const Countries = ({ country }) => {
    const [ countryInfo, setCountryInfo ] = useState({})
    const [ weatherInfo, setWeatherInfo ] = useState({})
    const { name: { common }, capital } = country

    

    const handleShowCountry = async () => {
        const { data } = await axios.get(apiRoutes.countryByName.replace('{name}', common))
        setCountryInfo(data[0])
        const weather = await axios.get(apiRoutes.currentWeather.replace('{apiKey}', '0715b21dde00c80d8307a9630dbeb9a8').replace('{name}', capital[0]))
        setWeatherInfo(weather)
    }

    return (
        <>  {
                Object.keys(countryInfo).length === 0 ?
                    <div>
                        <p> {common} </p>
                        <button type='button'  onClick={handleShowCountry}> Show </button>
                    </div> :
                    <div>
                        {
                            Object.keys(countryInfo) != 0 &&
                            <Country countryInfo={countryInfo} weatherInfo={weatherInfo} />
                        }
                    </div>
            }   
        </>
    )
}