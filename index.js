var popup = document.getElementById("popUp");
const cardContainer = document.getElementById("cardContainer");
var blurpage = document.getElementById("blur");
const ClosePopupTask = document.getElementById("closePopup1");
// var addTaskFormPopupButton = document.getElementById("addPopup1");
var taskList = document.getElementById("InputTODO");
var hideMsg = document.getElementById("hide-msgText");
let backbutton = document.getElementById("back_button");
const hide_container = document.getElementById("hide_container");
var appendTasklistdiv = document.getElementById("select-div");
taskPopupJS =document.querySelector('body')

var runningCard = 0;
//----------------

let visible = false;
function masterButton() {
  if (!visible) {
    const popupWindow = document.querySelector(".popupWindow");
    popupWindow.style.display = "flex";
    blurpage.style.filter = "blur(4px)";
  } else {
    const closePopup = document.querySelector(".popupWindow");
    closePopup.style.display = "none";
    blurpage.style.filter = "blur(0px)";
  }
}

function closePopup() {
  const closePopup = document.querySelector(".popupWindow");
  closePopup.style.display = "none";
  blurpage.style.filter = "blur(0px)";
}

function addcard() {
  const cardName = document.getElementById("inputTask").value; // Card Name variable creaded
  if (cardName.trim() === "") {
    return;
  }

  // create a temparary Element
  var newcard = document.createElement("div");
  var cardTitle = document.createElement("h2");
  var innerDiv = document.createElement("div");
  var deletButton = document.createElement("button");
  var addButton = document.createElement("button");

  // Append a Element as per reured position
  cardContainer.appendChild(newcard);
  newcard.appendChild(cardTitle);
  newcard.appendChild(innerDiv);
  newcard.appendChild(deletButton);
  newcard.appendChild(addButton);
  // innerDiv.document.cardContainer.firstChild
  // Add a style by using add class method
  newcard.classList.add("card");
  deletButton.classList.add("deleteName");
  addButton.classList.add("addTaskName");
  innerDiv.classList.add("childCard");

  // visible button in name in card
  cardTitle.innerText = cardName;
  deletButton.innerText = "Delete";
  addButton.innerText = "Add";

  hideMsg.style.display = "none"; // hide msg after clinking Add button
  closePopup(); // Affer the add card, card will hidden

  cardTitle.addEventListener("click", function () {
    hide_container.appendChild(newcard);
    cardContainer.style.display = "none";
    backbutton.style.display = "block";

    backbutton.addEventListener("click", function () {
      cardContainer.appendChild(newcard);
      cardContainer.style.display = "flex";
      backbutton.style.display = "none";
    });
  });

  // Add Task  POPUP visible
  addButton.addEventListener("click", function () {
    let popupWindowTask = document.createElement("div");
    let HedingTask = document.createElement("h1");
    let InputTask = document.createElement("input");
    let AddButton = document.createElement("button");
    let closeButton = document.createElement("button");

    HedingTask.innerText = "Add Task";
    AddButton.innerHTML = "Add";
    closeButton.innerText = "Close";

    popupWindowTask.appendChild(HedingTask);
    popupWindowTask.appendChild(InputTask);
    popupWindowTask.appendChild(AddButton);
    popupWindowTask.appendChild(closeButton);

    popupWindowTask.classList.add('task-popup-parent')
    AddButton.classList.add('Add-button')
    closeButton.classList.add('close-button')


    taskPopupJS.appendChild(popupWindowTask);

    AddButton.addEventListener("click", function () {
      Task = document.createElement("div");
      TaskName = document.createElement("span");
      TaskDelete = document.createElement("button");

      Task.appendChild(TaskName);
      Task.appendChild(TaskDelete);

      TaskName.innerHTML = InputTask.value;
      TaskDelete.innerText = "Mark Done";

      innerDiv.appendChild(Task);
      
      TaskDelete.addEventListener('click', function(){
        TaskName.style.textDecoration = 'line-through'
        TaskDelete.style.display = 'none'
        
    
      })
      
      
      popupWindowTask.innerText = "";
      popupWindowTask.style.display = 'none'
      
    });
    closeButton.addEventListener("click", function () {
      popupWindowTask.innerText = "";
      popupWindowTask.style.display = 'none'
    });
    
  });
  
}


