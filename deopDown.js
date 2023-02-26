const loadCountry = () => {
    const URL = ('https://restcountries.com/v3.1/all')
    fetch(URL)
        .then(res => res.json())
        .then(data => display(data.slice(0, 20)))
}

const display = (countries) => {
    const countryContainer = document.getElementById('country-container')
    countryContainer.innerHTML='';
    
    for (country of countries) {
        console.log(country)
        const countryDiv = document.createElement('div')
        // countries.classList.add('country')
        countryDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${country.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Name :${country.altSpellings[1]}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Details</a>
  </div>
</div>
        `
        countryContainer.appendChild(countryDiv)
    }
}

const europe = () => {
    fetch('https://restcountries.com/v3.1/region/europe')
        .then(res => res.json())
        .then(data => display(data))
}
const asia = () => {
    fetch('https://restcountries.com/v3.1/region/asia')
        .then(res => res.json())
        .then(data => display(data))
}
const africa = () => {
    fetch('https://restcountries.com/v3.1/region/africa')
        .then(res => res.json())
        .then(data => display(data))
}
const oceania = () => {
    fetch('https://restcountries.com/v3.1/region/oceania')
        .then(res => res.json())
        .then(data => display(data))
}
const america = () => {
    fetch('https://restcountries.com/v3.1/region/america')
        .then(res => res.json())
        .then(data => display(data))
}



loadCountry();