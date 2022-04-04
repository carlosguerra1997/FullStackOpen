import { Country } from "./Country"

export const Countries = ({ foundCountry }) => {

    console.log( 'Found: ', foundCountry )

    return (
        <div>
            {
                foundCountry.length > 1 
                ? foundCountry.map( country => <Country key={country.area} country={country} />)
                : 
                    <>
                        <h1>{ foundCountry[0]?.name.common }</h1>
                        <p>Capital: { foundCountry[0]?.capital[0] }</p>
                        <p>Population: { foundCountry[0]?.population }</p>
                        <h3>Languages</h3>
                        <ul>
                            
                        </ul>
                        <img src={foundCountry[0]?.flags.png} alt='Country flag' />
                    </>
            }
        </div>
    )
}