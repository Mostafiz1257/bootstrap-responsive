const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countryContainer = document.getElementById('country-container')
    // console.log(countries);
    countries.forEach(country => {
        console.log(country.cca2)
        const countryDiv=document.createElement('div')
        countryDiv.classList.add('country');
        countryDiv.innerHTML=`
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
        <button onclick="countryDdetails('${country.cca2}')">Details</button>
        `;
        
        countryContainer.appendChild(countryDiv);
    })
}


const countryDdetails=code=>{
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>showDetails(data[0]))
}

const showDetails=country=>{
    console.log(country)
    const showDetails=document.getElementById('country-details')
    showDetails.innerHTML=`
    <h3>Name :${country.name.common}</h3>
    <img src="${country.flags.png}">
    <p>Population : ${country.population}</p>
    `
}

loadCountries();


