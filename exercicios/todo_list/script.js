const form = document.querySelector("form");
const taskItem = document.getElementById("task");
const taskList = document.querySelector("ul");
const deleteIcon = document.querySelectorAll(".remove-icon")
const taskNotification = document.querySelector(".notifications")
const taskBox = document.querySelector(".item span input")
const taskParagrafo = document.querySelector(".item span p")


form.onsubmit = () => {
    event.preventDefault();

    //pega o valor que está no input
    const newItem = taskItem.value;
    // fnção que adiciona o item no html
    addItem(newItem);
};

function addItem(newItem) {
    const listItem = document.createElement("li");
    listItem.classList.add("item")
    listItem.innerHTML = `<span>
                <input type="checkbox" name="" id="checkbox" />
                <p> ${newItem} </p>
                </span> 
                `;
                
                // <img src="img/delete.png" class="remove-icon" alt="" />
    const removeIcon = document.createElement("img")
    removeIcon.classList.add("remove-icon")
    removeIcon.setAttribute("src", "./img/delete.png")
    removeIcon.setAttribute("alt", "delete icone")


    listItem.append(removeIcon)
    taskList.append(listItem);
    // console.log(taskItem.value);
    focusClear()
}
// risca o texto depois de ser clicado no checkbox
taskBox.addEventListener("change", function(event) {
    console.log(event)
    if (taskBox.checked == true) {
        console.log(taskBox)
        taskParagrafo.classList.add("completo")
    }else {
        taskParagrafo.classList.remove("completo")
    }
    console.log(taskBox.value)
    console.log(taskBox.checked)
})

// aparece o natificação de item apagado
function displayNotification() {
    taskNotification.style.display = "flex";
    console.log("Notificação exibida");

    setTimeout(() => {
        taskNotification.style.display = "none";
        console.log("Notificação ocultada");
    }, 3000); 
}

// remove o item
taskList.addEventListener("click", function(event) {

    if (event.target.classList.contains("remove-icon")) {
        const item = event.target.closest(".item")
        console.log(item)
        item.remove()
        
        setTimeout(displayNotification(), 3000); 
    }
})  


function focusClear() {
    taskItem.value = ""

    taskItem.focus()
}