fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
// fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res => res.json())
//  .then(data => displayMeals(data.meals[3].strMeal));
 .then(data => displayItems(data));
 

const displayItems = items =>{
    const itemsDiv = document.getElementById('meals');
   
    // console.log(meals.meals[0].strMeal);
   for(let i = 0;i< items.meals.length;i++){
       const meal = items.meals[i];
       const div = document.createElement('div');
       const itemName = document.createElement('h3');
       div.className='item';
   
    const itemInfo = `

    <img src="${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3>
    `
    div.innerHTML = itemInfo;
    itemsDiv.appendChild(div);
   }

}