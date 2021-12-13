
var paragraf = document.querySelectorAll(".paragraf");
Array.from(paragraf).forEach(item => {
  item.addEventListener("click", () => {
    var selected = document.getElementsByClassName("active");
    selected[0].className = selected[0].className.replace(" active", "");
    item.className += " active";
  });
})

var elements = document.querySelectorAll(".button-cheked");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    elements[i].classList.add("check");
    show()
  });

}


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
    const target = document.querySelector('.todo-items');
    const newTodo = document.createElement('div', draggable = "true");
    newTodo.className = 'todo-item', 'draggable';
    newTodo.draggable = "true";
    target.appendChild(newTodo);
    target.parentNode.insertBefore(newTodo, target);
    newTodo.innerHTML = `
     <div class="button-cheked" onclick="checkText() ">
  <img class="cheked-btn" 
    src="https://raw.githubusercontent.com/zaklinaradivojevic/todo-app/8c812e715ad10f19665a13ecd44d1a5d51d6f0be/images/icon-check.svg"
    alt="cheked-icon">
</div>
<div class="todo-text">
  <p class="todoText" id="0">${input.value}<p>
</div>
<div class="delete">
<img class="delete-row"
  src="https://raw.githubusercontent.com/zaklinaradivojevic/todo-app/c533248264a38016caf370e258467a7653b41095/images/icon-cross.svg">
</div>

`;
  }
  var newTodo = document.querySelectorAll(".button-cheked");
  for (let i = 0; i < newTodo.length; i++) {
    newTodo[i].addEventListener("click", function () {
      newTodo[i].classList.toggle("check");
      show()
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


  input.value = "";

});



// Click on a close button to hide the current list item
var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";

  }
}

function checkText() {
  var textDone = document.querySelector(".todoText");
  textDone.classList.add("checkText");
}

function checkText1() {
  var textDone = document.getElementById("1");
  textDone.classList.add("checkText");
}

function checkText2() {
  var textDone = document.getElementById("2");
  textDone.classList.add("checkText");
}

function checkText3() {
  var textDone = document.getElementById("3");
  textDone.classList.add("checkText");
}

function checkText4() {
  var textDone = document.getElementById("4");
  textDone.classList.add("checkText");
}

function checkText5() {
  var textDone = document.getElementById("5");
  textDone.classList.add("checkText");
}

function checkText6() {
  var textDone = document.getElementById("6");
  textDone.classList.add("checkText");
}

function show() {
  var show = document.querySelectorAll(".delete");
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "block";
  }
}
function updateNumber() {
  var DinumicNumber = document.getElementById("dinamicNum");
  var list = document.querySelectorAll(".todo-item");
  var number = list.length;
  DinumicNumber.textContent = number;
}
