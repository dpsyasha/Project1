const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ""){
        alert("You must put/write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
}

listContainer.addEventListener('click', function(event){
    if (event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveTask();
    } else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask() {
    localStorage.setItem("task", listContainer.innerHTML);
}

function retrieveTask(){
    listContainer.innerHTML = localStorage.getItem("task");
}
retrieveTask();