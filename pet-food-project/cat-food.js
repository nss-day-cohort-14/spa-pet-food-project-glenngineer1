var catRequest = new XMLHttpRequest();

catRequest.open("GET", "cat.json");

catRequest.send();

catRequest.addEventListener("load", catData);
catRequest.addEventListener("error", errorMessage);

function errorMessage() {
  console.log("An error occurred while loading your file");
}

function catData() {
  var catInfo = JSON.parse(this.responseText);
  buildCatInfo(catInfo);
}

function buildCatInfo(catFoodData) {
  var catFoodToDom = document.getElementById("cat-food-data");

  for (currentCatFood in catFoodData.cat_brands) {
    var catFoodOutput = "";
    var types;
    var volumes;

    var catFood = catFoodData.cat_brands[currentCatFood];
    catFoodOutput += "<div class='catFoodCard'>";
    catFoodOutput += "<p class='cat-brand'>" + "Brand: " + catFood.name + "</p>";

    for (var i = 0; i < catFood.breeds.length; i++) {
      types = catFood.breeds[i].types;
      catFoodOutput += "<p class='cat-breed'>" + "Breed: " + catFood.breeds[i].breed + "</p>";

      for (var j = 0; j < types.length; j++) {
        volumes = types[j].volumes;
        catFoodOutput += "<p class='cat-style'>" + "Style: " + types[j].type + "</p>";

        for (var k = 0; k < volumes.length; k++) {
          var size = volumes[k].name;
          var price = volumes[k].price;
          catFoodOutput += "<p>" + "Size: " + size + " " + "Price: " + price + "</p>";
        }
      }
    }
    catFoodOutput += "</div>"
    catFoodToDom.innerHTML += catFoodOutput;
  }
}










