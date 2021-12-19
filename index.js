

//set activ class to todo-info
var paragraf = document.querySelectorAll(".paragraf");
Array.from(paragraf).forEach(item => {
  item.addEventListener("click", () => {
    var selected = document.getElementsByClassName("active");
    selected[0].className = selected[0].className.replace(" active", "");
    item.className += " active";
  });
})
//check button bg
var elements = document.querySelectorAll(".button-cheked");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    elements[i].classList.add("check");
  });

}
//show delete button on checked item 1
var button = document.getElementById("button1");
button.addEventListener("click", function () {
  var textCrosed = document.getElementById("1");
  var remove = document.getElementById("remove1");
  button.classList.add("check");
  textCrosed.classList.add("checkText");
  remove.style.display = "block";
});
//show delete button on checked item 2
var button = document.getElementById("button2");
button.addEventListener("click", function () {
  var textCrosed = document.getElementById("2");
  var remove = document.getElementById("remove2");
  button.classList.add("check");
  textCrosed.classList.add("checkText");
  remove.style.display = "block";
});
//show delete button on checked item
var button = document.getElementById("button3");
button.addEventListener("click", function () {
  var textCrosed = document.getElementById("3");
  var remove = document.getElementById("remove3");
  button.classList.add("check");
  textCrosed.classList.add("checkText");
  remove.style.display = "block";
});
//show delete button on checked item
var button = document.getElementById("button4");
button.addEventListener("click", function () {
  var textCrosed = document.getElementById("4");
  var remove = document.getElementById("remove4");
  button.classList.add("check");
  textCrosed.classList.add("checkText");
  remove.style.display = "block";
});
//show delete button on checked item
var button = document.getElementById("button5");
button.addEventListener("click", function () {
  var textCrosed = document.getElementById("5");
  var remove = document.getElementById("remove5");
  button.classList.add("check");
  textCrosed.classList.add("checkText");
  remove.style.display = "block";
});
//show delete button on checked item
var button = document.getElementById("button6");
button.addEventListener("click", function () {
  var textCrosed = document.getElementById("6");
  var remove = document.getElementById("remove6");
  button.classList.add("check");
  textCrosed.classList.add("checkText");
  remove.style.display = "block";
});
//click only once
var button = document.querySelector(".button-cheked");
button.addEventListener("click", onClick);

function onClick() {
  console.log("Clicked");
  button.disabled = true;
}

//add new todo
var input = document.getElementById("myInput");
input.addEventListener("keyup", function (event) {
  var x;
  x = document.getElementById("myInput").value;
  if (x == "") {
    console.log("Enter  todo  list  ");
  }
  if (event.keyCode === 13 && x != "") {
    event.preventDefault();
    var input = document.getElementById("myInput");
    var checbox = document.querySelector("input[type='checkbox']");
    var label = document.querySelector("label");
    var list = document.querySelectorAll(".todo-item");
    var number = list.length;

    const target = document.querySelector('.todo-items');
    const newTodo = document.createElement('div', draggable = "true");
    newTodo.className = 'todo-item draggable';
    newTodo.draggable = "true";
    for (var i = 0, len = newTodo.length; i < len; i++) {
      newTodo[i].attachEvent('dragstart', dragStart);
      newTodo[i].attachEvent('dragenter', dragEnter);
      newTodo[i].attachEvent('dragover', dragOver);
      newTodo[i].attachEvent('dragleave', dragLeave);
      newTodo[i].attachEvent('dragend', dragEnd);
      newTodo[i].attachEvent('drop', dragDrop);
    }
    target.appendChild(newTodo);
    target.parentNode.insertBefore(newTodo, target);
    newTodo.innerHTML = `
     <div class="button-cheked" onclick="checkText()">
     <label for="item-6">
     <input type="checkbox"  />
  <img class="cheked-btn" 
    src="https://raw.githubusercontent.com/zaklinaradivojevic/todo-app/8c812e715ad10f19665a13ecd44d1a5d51d6f0be/images/icon-check.svg"
    alt="cheked-icon">
    </label>
</div>
<div class="todo-text">
  <p class="todoText">${input.value}<p>
</div>
<div class="delete">
<img class="delete-row"
  src="https://raw.githubusercontent.com/zaklinaradivojevic/todo-app/c533248264a38016caf370e258467a7653b41095/images/icon-cross.svg">
</div>

`;
    checbox.name = "item-" + number;
    checbox.id = "item-" + number;
    label.htmlFor = "item-" + number;

  }

  //click only once
  var button = document.querySelector(".button-cheked");
  button.addEventListener("click", onClick);

  function onClick() {
    console.log("Clicked");
    button.disabled = true;
  }

  var newTodo = document.querySelectorAll(".button-cheked");
  for (let i = 0; i < newTodo.length; i++) {
    newTodo[i].addEventListener("click", function () {
      [].forEach.call("click", function (item) {
        newTodo[i].classList.toggle("check");
        checkText(item);
      });
    });
  }
  var close = document.getElementsByClassName("delete");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  var listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function (item) {
    addEventsDragAndDrop(item);
  });
  var btnDone = document.querySelectorAll('.button-cheked');
  btnDone.onclick = function () {
    checkText();
  }
  updateNumber()

  input.value = "";


});

function checkText() {
  var textDone = document.querySelector(".todoText");
  textDone.classList.add("checkText");
}

function updateNumber() {
  var DinumicNumber = document.getElementById("dinamicNum");
  var list = document.querySelectorAll(".todo-item");
  var number = list.length;
  DinumicNumber.textContent = number;
}


