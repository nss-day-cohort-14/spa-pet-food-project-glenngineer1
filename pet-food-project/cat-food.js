var catRequest = new XMLHttpRequest();

catRequest.open("GET", "cat.json");

catRequest.send();

catRequest.addEventListener("load", catData);
catRequest.addEventListener("error", errorMessage);

function errorMessage() {
  console.log("An error occurred while loading your file");
}

function catData() {

}
