function getNewList() {
  const list = document.getElementsByClassName("list-group");

  arr = ["Quato item", "Quinto item"];

  for (let i = 0; i <= Array.length; i++) {
    let item = document.createElement("li");
    let textnode = document.createTextNode(arr[i]);
    item.appendChild(textnode);
    item.className = "list-group-item";

    list[0].appendChild(item);
  }

  return list;
}

function sortCard() {
  const list = document.getElementsByClassName("card-list");

  const [a] = list;

  //botao verde
  let newAnimals = a.getElementsByClassName("btn btn-primary");
  newAnimals[0].className = "btn btn-success";
}

function menuNavBar() {
  const menu = document.getElementsByClassName("btn-group-vertical");
  menu[0].className = "navbar navbar-light bg-light";
}

function header() {
  const btn = document.getElementsByClassName("btn btn-primary btn-lg");
  btn[0].className = "btn btn-success btn-lg";

  const header = document.getElementsByClassName("jumbotron")[0];
  header.align = "right";
  header.style.backgroundColor = "#778899";
  header.style.color = "#FBFBFB";
}

getNewList();
sortCard();
menuNavBar();
header();
