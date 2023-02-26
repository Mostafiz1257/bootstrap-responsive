const loadMelas = (strachItem) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strachItem}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => dispalyMeal(data.meals))
}
const dispalyMeal = meals => {
    const mealContainer = document.getElementById('meals-container')
    mealContainer.innerText = '';
    console.log(meals)
    meals.forEach(meal => {
        console.log(meal)
        const divMeals = document.createElement('div')

        divMeals.classList.value="col col-12 col-md-6 col-lg-3"

        divMeals.innerHTML = `
        <div class="card">
        <img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          <button onClick="loadMelasDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Details Food
</button>
     </div>
     </div>
        `
        //append child//
        mealContainer.appendChild(divMeals);
    });
}


const srecahBtn = () => {

    const sreachField = document.getElementById('sreach-field').value;
    console.log(sreachField);
    loadMelas(sreachField)

}

const loadMelasDetails=mealsId=>{
   const  url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayMealDetails(data.meals[0]))
}


// async...await............

const loadModal2=async(idMeal)=>{
    const  url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`
    const res= await fetch(url)
    const data= await res.json();
    displayMealDetails(data.meals[0])
}

const displayMealDetails=meal=>{
document.getElementById('exampleModalLabel').innerText=meal.strMeal
const exampleBody=document.getElementById('exampleModalBody')
exampleBody.innerHTML=`
<img class="img-fluid" src="${meal.strMealThumb}">
`
}

loadMelas('rice');