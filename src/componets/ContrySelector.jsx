import React, {useEffect, useState} from 'react' ;

function ContrySelector(props) {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch("https://api.covid19api.com/countries")
        .then((content)=>content.json())
        .then((result)=>setCountries(result.sort((a, b)=>(a.Country > b.Country ? 1:-1))))
    }, [])
    return (
        <div className='card'>
            <select onChange={(e)=>{props.changeSelectedCountry(e.target.value)}} value={props.selectedCountry} name="country" id="country-select">

            {countries&&countries.map((Country)=>(
                <option name= {Country.Country} key = {Country.Country} value= {Country.Slug}> {Country.Country} 
                </option>
            ))}
            
            </select>
            
        </div>
    );
}

export default ContrySelector;