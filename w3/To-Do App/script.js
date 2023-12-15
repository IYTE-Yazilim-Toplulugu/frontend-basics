const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTodo() {
    if (inputBox.value   == "") {
        alert("You must write something!!");
    }
    else {

        // List objesi oluşturulur
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // list objesine silme eventi için X işareti eklenir.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);



function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

loadTasks();