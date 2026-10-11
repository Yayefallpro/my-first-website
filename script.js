let userName = "Yacine Fall";
const year = 2026;
console.log("Hello, " + userName);
console.log(year);
const greetingElement = document.getElementById("greeting");
greetingElement.textContent = "Welcome, " + userName + "! It is " + year + ".";
greetingElement.style.color = "green";   
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", function () {
  if (greetingElement.style.color === "orange") {
    greetingElement.style.color = "purple";
     colorButton.textContent = "Make it orange";
  } else {
    greetingElement.style.color = "orange";
     colorButton.textContent = "Make it purple";
  }
});
const toggleButton = document.getElementById("toggleButton");
const secretMessage = document.getElementById("secretMessage");
secretMessage.style.display = "block";
toggleButton.addEventListener("click", function () {
  if (secretMessage.style.display === "block") {
    secretMessage.style.display = "none";
  } else {
    secretMessage.style.display = "block";
  }
});