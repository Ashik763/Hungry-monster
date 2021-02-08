
//search part
const searchItem = () =>{
    const searchText = document.getElementById("input").value;
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  
    fetch(url)
    .then(res => res.json())

 .then(data => displayItems(data))
 .catch(error => displayError('Something went wrong!please try again letter.'));

}
//error part
const displayError = error =>{
    const errorTag = document.getElementById('error-message');
    errorTag.innerHTML =`
    <img src="error1.jpg">
    <h2>Sorry! Something went wrong.</h2>
    <h3>Tips:refresh again & search with some meaningful words!</h3>
    
    
    `
}



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
//  items details
  
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

