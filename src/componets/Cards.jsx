import React, { useEffect, useState } from 'react';
import Card from './Card';
import ContrySelector from './ContrySelector';



function Cards(props) {
    const [info, changeInfo] = useState({
        soma: 0,
        deaths:0,
        casesToday:0,
        totalDeaths:0,
        recovered:0
    })
    useEffect(() => {
        fetch(`https://api.covid19api.com/country/${props.selectedCountry.toLowerCase()}`)
        .then((content)=>content.json())
        .then((result) => {
            const soma = result[result.length-1].Confirmed
            const deaths = result[result.length-1].Deaths - result[result.length-2].Deaths
            const totalDeaths = result[result.length-1].Deaths
            const casesToday = result[result.length-1].Active - result[result.length-2].Active
            const recovered = result.reduce((acc, act) => act.Recovered ? act.Recovered:acc, 0)
            changeInfo({...info, soma, deaths, casesToday, totalDeaths, recovered})
            console.log(result)
        })
    } ,[props.selectedCountry])

    return (
        <div>
            <Card number= {info.soma} local={props.selectedCountry} text1="Número de casos"/>
            
            <Card number= {info.deaths} local={props.selectedCountry} text1="Número de mortes hoje"/>

            <Card number= {info.casesToday} local={props.selectedCountry} text1="Número de casos hoje"/>

            <Card number= {info.totalDeaths} local={props.selectedCountry} text1="Número total de mortes"/>

            <Card number= {info.recovered} local={props.selectedCountry} text1="Número total de recuperações"/>

        </div>
    );
}

export default Cards;