// const input = document.getElementById("input").value
// document.getElementById("search-btn").addEventListener('click',function(input){

//     const search=`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`
        
//         fetch(search)
//         .then(res => res.json())

//   .then(data => displayItems(data));
// })

const searchItem = () =>{
    const searchText = document.getElementById("input").value;
    // console.log(searchText);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())

 .then(data => displayItems(data))
 .catch(error => displayError('Something went wrong!please try again letter.'));
//  .then(data => console.log(data));
}
// const displayError = error =>{
//         const errorTag = document.getElementById('error-message');
//         errorTag.innerText =error;
//     }
const displayError = error =>{
    const errorTag = document.getElementById('error-message');
    errorTag.innerHTML =`
    <img src="error1.jpg">
    <h3>Sorry! Something went wrong.</h3>
    
    
    `
}


// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')

// .then(res => res.json())

//  .then(data => displayItems(data));

 

const displayItems = items =>{
    const itemsDiv = document.getElementById('meals');
   
    ;
   for(let i = 0;i< items.meals.length;i++){
       const meal = items.meals[i];
       const div = document.createElement('div');
       const itemName = document.createElement('h3');
       div.className='item';
   
    const itemInfo = `

    <img  onclick="displayItemsDetail('${meal.strMeal}')" src="${meal.strMealThumb}">
    <h3 "displayItemsDetail('${meal.strMeal}')">${meal.strMeal}</h3>
    <button onclick="displayItemsDetail('${meal.strMeal}')"> details </button>

    `
    div.innerHTML = itemInfo;
    itemsDiv.appendChild(div);
   }

}

const displayItemsDetail = itemName =>{
   
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`
    
    
    console.log(url);
   
    fetch(url)
    .then(res => res.json())
   
    .then(data => (itemIngredient(data)));
   
    
    
}
  
const itemIngredient = ingredient =>{
   

    const ingredientDiv =document.getElementById('ingredients');
    ingredientDiv.innerHTML =`
                                
                            <img id="ingredient-pic" src="${ingredient.meals[0].strMealThumb}">
                            <h1 id="item-title">${ingredient.meals[0].strMeal}</h1>
                            <h2 id="ingredient-title">Ingredients</h2>
                            <h5>${ingredient.meals[0].strMeasure1} ${ingredient.meals[0].strIngredient1}</h5>
                             <h5>${ingredient.meals[0].strMeasure2} ${ingredient.meals[0].strIngredient2} </h5>
                             <h5>${ingredient.meals[0].strMeasure3} ${ingredient.meals[0].strIngredient3}</h5>
                             <h5>${ingredient.meals[0].strMeasure4} ${ingredient.meals[0].strIngredient4}</h5>
                             <h5>${ingredient.meals[0].strMeasure5} ${ingredient.meals[0].strIngredient5}</h5>
                             <h5>${ingredient.meals[0].strMeasure6} ${ingredient.meals[0].strIngredient6}</h5>
                             <h5>${ingredient.meals[0].strMeasure7} ${ingredient.meals[0].strIngredient7}</h5>
                             <h5>${ingredient.meals[0].strMeasure8} ${ingredient.meals[0].strIngredient8}</h5>
    
    
    
    `
    console.log(ingredient.meals[0].strIngredient5);
}

// const displayError = error =>{
//     const errorTag = document.getElementById('error');
//     errorTag.innerText =error;
// }