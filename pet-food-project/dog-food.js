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

  var dogFoodtoDom = document.getElementById("dog-food-data");

  for (currentDogFood in dogInfo.dog_brands) {
  var dogFoodOutput = "";
  var volumes;

  var dog = dogInfo.dog_brands[currentDogFood];
  dogFoodOutput += "<div class='dogFoodCard'>"
  dogFoodOutput += "<p class='dog-brand'>" + "Brand: " + dog.name + "</p>";

    for (var i = 0; i < dog.types.length; i++) {
      volumes = dog.types[i].volumes;
      dogFoodOutput += "<p class='dog-style'>" + "Style: " + dog.types[i].type + "</p>";

      for (var j = 0; j < volumes.length; j++) {
        var size = volumes[j].name;
        var price = volumes[j].price;
        dogFoodOutput += "<p>" + "Size: " + size + " Price: " + price + "</p>";
      }
    }
    dogFoodOutput += "</div>";
    dogFoodtoDom.innerHTML += dogFoodOutput;
  }
}
