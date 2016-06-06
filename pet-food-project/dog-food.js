var dogRequest = new XMLHttpRequest();

dogRequest.open("GET", "dog.json");

dogRequest.send();

dogRequest.addEventListener("load", dogData);
dogRequest.addEventListener("error", errorMessage);

function errorMessage() {
  console.log("An error occurred while loading your file");
}

function dogData() {
  var dogInfo = JSON.parse(this.responseText);
  buildDogFood(dogInfo)
}

function buildDogFood(dogFoodData) {
  var dogFoodtoDom = document.getElementById("dog-food-data");

  for (currentDogFood in dogFoodData.dog_brands) {
  var dogFoodOutput = "";
  var volumes;

  var dogFood = dogFoodData.dog_brands[currentDogFood];
  var brand = dogFood.name;
  dogFoodOutput += "<div class='dogFoodCard'>"
  dogFoodOutput += "<div>" + "Brand: " + brand + "</div>";

    for (var i = 0; i < dogFood.types.length; i++) {
      volumes = dogFood.types[i].volumes;
      dogFoodOutput += "<div>" + "Type: " + dogFood.types[i].type + "</div>";
    }

    for (var j = 0; j < volumes.length; j++) {
      var size = volumes[j].name;
      var price = volumes[j].price;
      dogFoodOutput += "<div>" + "Size: " + size + " " + price + "</div>"
    }
    dogFoodOutput += "</div>";

  dogFoodtoDom.innerHTML += dogFoodOutput;

  }
}
