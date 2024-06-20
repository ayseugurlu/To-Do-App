const inputBox = document.getElementById("text-input")
const inputBtn = document.getElementById("input-button")
const inputForm =document.getElementById("to-do-input")
const listContainer = document.querySelector(".list-group")

function addTask(){

  if(inputBox.value === ''){
    alert("Sie müssen etwas schreiben!")
  }else{
    let li = document.createElement("li")
    li.className = "list-group-item bg-transparent text-light fs-4 "
    li.textContent=inputBox.value
    listContainer.appendChild(li)
    let img =document.createElement("img")
    img.id="delete-img"
    img.src = "image/delete2.png"
    li.appendChild(img)
  }
  saveData()
}


inputBtn.addEventListener("click", (e) =>{
  e.preventDefault()
  addTask(e)  
  inputForm.reset()
  
})

listContainer.addEventListener("click", (e)=>{
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData()
  }else if(e.target.tagName === "IMG"){
    e.target.parentElement.remove()
    saveData()
  }
},false)


const saveData = () => {

  localStorage.setItem("data", listContainer.innerHTML);
}

const showTask = () =>{
  listContainer.innerHTML = localStorage.getItem("data")
}

window.addEventListener("load", ()=>{
  showTask()
})
