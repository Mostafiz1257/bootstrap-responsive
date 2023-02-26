const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};


    const persons = person.result;

// console.log(personData)
const dispalyData = (persons) => {
    const divContainer = document.getElementById('div-Container')
console.log(persons)
    for (const person of persons) {
        // console.log(person)
        const creatDiv = document.createElement('div')
        creatDiv.innerHTML = `
        <div class="card-body text-green-500 border-2 ">
        <h2 class="card-title">Name:${person .name.common}</h2>
        <p>Age:${person.age}</p>
        <p>Street:${person.address.street}</p>
        <div class="card-actions justify-end">
        
        </div>
      </div>
        `
        divContainer.appendChild(creatDiv);
    }
}
   
dispalyData(persons);