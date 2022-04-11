export const Country = ({ countryInfo, weatherInfo }) => {
    const { data } = weatherInfo
    return (
        <>
            <div>
                {   Object.keys(countryInfo) != 0 &&
                    <>
                        <h1>{ countryInfo.name.common }</h1>
                        <p>Capital: { countryInfo.capital[0] }</p>
                        <p>Population: { countryInfo.population }</p>
                        <h3>Spoken languages</h3>
                        <ul>
                            {
                                Object.entries(countryInfo.languages).map(language => (
                                    <li key={language[0]}> {language[1]} </li>
                                ))
                            }
                        </ul>
                        <img src={countryInfo.flags.png} alt='Country flag' />
                        <h1> Weather in { countryInfo.capital[0] } </h1>
                        {
                            Object.keys(weatherInfo).length > 0 &&
                                <>
                                    <h4>Temperature: {data.current.temperature} </h4>
                                    <img src={data.current.weather_icons[0]} alt='Weather image' />
                                    <h4>Wind: {data.current.wind_speed} mph direction {data.current.wind_dir} </h4>
                                </>
                        }
                    </>
                }
            </div>
        </>
        
    )
}