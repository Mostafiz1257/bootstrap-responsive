const loadPhone = (sreachText,dataLimit) => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=${sreachText}`
    fetch(URL)
        .then(res => res.json())
        .then(data => display(data.data,dataLimit))
}

const display = (phones,dataLimit) => {
    const phoneContainer = document.getElementById('phone-Container')
    phoneContainer.innerText = "";

const showAll = document.getElementById('show-all')
        if (dataLimit && phones.length > 8) {
         
             phones = phones.slice(0, 8)
            showAll.classList.remove('d-none')
        }
        else{
            showAll.classList.add('d-none')
        }


    const notFound = document.getElementById('not-found')
    if (phones.length === 0) {
        notFound.classList.remove('d-none')
    }
    else {
        notFound.classList.add('d-none')
    }

        

    for (const phone of phones) {
        console.log(phone)
        const divPhone = document.createElement('div')


        divPhone.classList.add('col')
        divPhone.innerHTML = `
        <div class="card p-5">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
      </div>
      
        `
        phoneContainer.appendChild(divPhone);
    }
    toggleSpinner(false)
}


const processSreach=(dataLimit)=>{
    toggleSpinner(true)
    const inputFiled = document.getElementById('input-filed')
    const inputValue = inputFiled.value;
    loadPhone(inputValue,dataLimit);
}

document.getElementById('btn-sreach').addEventListener('click', function () {
    toggleSpinner(true)
    processSreach(8)
})

document.getElementById('input-filed').addEventListener('keypress', function (e) {
    console.log(e.key)
    if (e.key === 'Enter') {
        processSreach(8)
    }
});




const toggleSpinner = isLoading => {
    const loadSection = document.getElementById('load-section')
    if (isLoading) {
        loadSection.classList.remove('d-none')
    }
    else {
        loadSection.classList.add('d-none')
    }
}


document.getElementById('btn-show-all').addEventListener('click',function(){

   processSreach();

})

const loadPhoneDetails=async(id)=>{
const url=`https://openapi.programming-hero.com/api/phone/${id}`
const res=await fetch(url);
const data=await res.json();
displayDetails(data.data)
}


const displayDetails =phone=>{
    console.log(phone)
const modalTitle=document.getElementById('exampleModalLabel')
modalTitle.innerText=phone.name;
const moreDetails=document.getElementById('more-phone-details')
moreDetails.innerHTML=`
<p>Date: ${phone.mainFeatures.storage} </p>
<img src="${phone.image}">
`

}
// loadPhone();