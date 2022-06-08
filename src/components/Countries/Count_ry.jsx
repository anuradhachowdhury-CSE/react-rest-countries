import React, { useEffect, useState } from 'react'
import Country from '../Country/Country'
import './Count_ry.css'

const Count_ry = () => {
    return (

        <Countryinfo></Countryinfo>
    )
}

function Countryinfo() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className='country-container'>
            {
                countries.map(country => <Country
                    key={country.capital}
                    country={country}
                    // name={country.name}
                    flags={country.flags}
                // capital={country.capital}
                // population={country.population}
                >
                </Country>)
            }
        </div>
    )
}

export default Count_ry