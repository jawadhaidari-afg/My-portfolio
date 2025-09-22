const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

//Event Listener

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

//AddTask function

function addTask() {
   // taskList.innerHTML=taskInput.value;
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please Enter a Text");
        return;
    }

    //Create Li
    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.classList.add("completed");
    })

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("delete-btn");

    delBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}