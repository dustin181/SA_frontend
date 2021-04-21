// const headers = document.getElementsByTagName("h2");
// const list = document.getElementsByClassName("item");
// const button = document.getElementsById("submit");
//
// const headers = document.querySelectorAll("h2");
// const list = document.querySelector(".item");
// const list = document.querySelector("h2.item");
// const button = document.querySelector("#submit");

// const todoList = document.querySelector("#todo-list");
// const items = todoList.children; //gives htmlcollection

// const collectionItems = document.getElementsByTagName("item");
// const todoList = document.getElementById('todo-list');
// const todoNr = document.getElementsByClassName("todo-nr")[0];
//
//
// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "Item 3";
//
// todoList.appendChild(newItem);
//
// todoNr.innerText = collectionItems.length;

//EVENTS ****************

const button = document.querySelector('#submit');

button.addEventListener('click', function(){
    console.log("new item added")
})

button.addEventListener('click', addItem)

function addItem(){
    console.log("new item added")
}