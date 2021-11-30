function myFunction(e) {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function (el) {
        el.classList.remove("active");
        el.classList.add("paragraf");
    });
    e.target.className = "active";
}

var input = document.getElementById("myInput");

input.addEventListener("keyup", function (event) {
    var x;
    x = document.getElementById("myInput").value;
    if (x == "") {
        alert("Enter  todo  list  ");
    }
    if (event.keyCode === 13 && x != "") {
        event.preventDefault();
        var row = document.getElementById("myRow");
        var table = document.getElementById("table");
        var input = document.getElementById("myInput");

        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = `<div class="table-fild">
        <div class="table-cheked" id="tablecheked" onclick="checkImg()">
          <img class="cheked-img"
            src="https://raw.githubusercontent.com/zaklinaradivojevic/todo-app/8c812e715ad10f19665a13ecd44d1a5d51d6f0be/images/icon-check.svg"
            alt="cheked-icon">
           </div>
            <p id="tableText">${input.value}</p>
            <img class="delete-row" id="deleteRow" src="https://raw.githubusercontent.com/zaklinaradivojevic/todo-app/c533248264a38016caf370e258467a7653b41095/images/icon-cross.svg" onclick="deleteRow()">
   ` ;
    }
});



function deleteRow() {
    document.getElementById("table").deleteRow(0);
}

function checkImg() {
    document.getElementById("tablecheked").classList.toggle("checked-bg");
    document.getElementById("tableText").classList.toggle("checked-bg-text");

}


