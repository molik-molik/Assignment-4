window.onload = () => {
  let button = document.querySelector("#btn");
  button.addEventListener("click", RandomName);
};

function RandomName(names) {
  let result = document.querySelector("#result");
  var names = ["Malika", "Alina", "James", "John", "Marie", "Anne", "George", "Liam", "Aruzhan", "Ginny", "Charles", "Leona", "Finn", "Lewis"];
  result.innerHTML = names[Math.floor(Math.random() * names.length)] + " will bye everyone food!";
}
