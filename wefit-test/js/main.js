function getNewList() {
  const list = document.getElementsByClassName("list-group");

  arr = ["Quarto item", "Quinto item"];

  const firstItem = document.getElementsByClassName("list-group-item active");

  firstItem[0].className = "list-group-item";

  for (let i = 0; i <= Array.length; i++) {
    let item = document.createElement("li");
    let textnode = document.createTextNode(arr[i]);
    item.appendChild(textnode);

    item.className =
      arr[i] == "Quarto item" ? "list-group-item active" : "list-group-item";

    list[0].appendChild(item);
  }

  return list;
}

function sortCard() {
  const listBox = document.getElementsByClassName("list-box")[0];

  const cards = document.getElementsByClassName("card");
  const [animais, tecnologia, pessoas, natureza] = cards;

  //botão verde
  animais.getElementsByClassName("btn btn-primary")[0].className =
    "btn btn-success";

  const newArr = [natureza, animais, pessoas, tecnologia];

  const list = document.getElementsByClassName("card-list");
  list[0].remove();

  for (let i = 0; i < newArr.length; i++) {
    let item = document.createElement("div");
    let node = item.appendChild(newArr[i]);
    node.className = "col-lg-3";
    listBox.appendChild(node);
  }
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
