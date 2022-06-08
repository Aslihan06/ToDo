const addBtn = document.querySelector(".add")
const toField = document.querySelector(".taskInput")
const list = document.querySelector(".list")

addBtn.addEventListener("click", addTask)

function addTask() {
    if (toField.value.length === 0) {
        return;
    } else {
        const taskContainer = list.appendChild(document.createElement("div"))
        const task = taskContainer.appendChild(document.createElement("p"))
        const doneBtn = taskContainer.appendChild(document.createElement("i"))
        const deleteBtn = taskContainer.appendChild(document.createElement("i"))
        deleteBtn.className = "fas fa-trash-alt"
        doneBtn.className = "fas fa-check"
        taskContainer.className = "taskContainer"
        task.className = "task"
        task.innerHTML = toField.value.charAt(0).toUpperCase() + toField.value.slice(1)
        toField.value = ""
        deleteBtn.addEventListener("click", deleteTask)
        doneBtn.addEventListener("click", checkTask)
        function checkTask(e) {
            e.target.previousSibling.style.textDecoration = "line-through"
        }
        function deleteTask(e) {
            e.target.parentElement.remove()
        }
       
    }

}
toField.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
        addBtn.click();

    }
});

window.onload=()=>{
    toField.focus();
};
