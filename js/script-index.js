$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	/*/Ejercicio 3: Necesito recorrer el arreglo "recipesArray" y render 
	(pintar) las que tengan attr "highlighted=true"*/
	for(var i=0; i<recipesArray.length; i++){
		//si el objeto numero i del array tiene la propiedad highlighted en true
		if(recipesArray[i].highlighted){
			//ejecuto función en los que cumplen la condicion
			renderRecipe(recipesArray[i]);
		}
	};
	/*Otro metodo de hacerlo, con metodo forEach de javascript, que aplica
	una función a cada elemento de cualquier array
	
							recibe parametro receta, objetos dentro del array
	recipesArray.forEach(function (recipe){
		console.log(reciple.title)   <--- ejemplo, imprimir titulos en consola
	});
			Alternativa para el Ejercicio 3 sería:
	recipesArray.forEach(function (recipe){
		if(recipes.highlighted == true){
			renderReciple(recipe))
	});
	*/

}

/* Ejercicio 4
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	/*creamos una variable con el template que debe rellenarse y ponemos las variables pedidas
	definidas en recipes.js con sus determinados nombres */
	var template=`
	
	<a class="item-recipe" href="#">
	<span class="attribution">
	  <span class="title-recipe"> ${recipe.title} </span>
	  <span class="metadata-recipe">
		<span class="author-recipe"> ${recipe.source.name} </span>
		<span class="bookmarks-recipe">
		  <span class="icon-bookmark"></span> 
		</span>
	  </span>
	</span>
  
	<img src="img/recipes/640x800/${recipe.name}.jpg" />  </a>`

	$('.list-recipe').append(template);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	//console.log('Activities: ', activitiesArray);

	if(activitiesArray.length > 0){
		$('.wrapper-message').html();
	};

	for (var i=0; i < activitiesArray.length; i++){
		renderActivity(activitiesArray[i]);
	}
}




/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(activity) {
	console.log('Voy a mostrar actividades', activities);
	var template=`
	<a href="#" class="item-activity">

  		<span class="attribution">
  
			<span class="avatar">
			<img src="${activity.userAvatar}" class="image-avatar">
			</span>
      
			<span class="meta">
			<span class="author">${activity.userName}</span> made 
			<span class="recipe">${activity.recipeName}</span>: ${activity.text} 
			<span class="location">${activity.place}</span>
			</span>
  
  		</span>

  		<div class="bg-image" style="background-image: url('${activity.image}');"></div>
	</a>`;

	$('.list-activities').append(template);
}


