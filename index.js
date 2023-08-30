var popup = document.getElementById("popUp");
const cardContainer = document.getElementById("cardContainer");
var blurpage = document.getElementById("blur");
const ClosePopupTask = document.getElementById("closePopup1");
var addTaskFormPopupButton = document.getElementById("addPopup1");
var taskList = document.getElementById("InputTODO");
var hideMsg = document.getElementById("hide-msgText");
let backbutton = document.getElementById("back_button");
const hide_container = document.getElementById("hide_container");
var appendTasklistdiv = document.getElementById('select-div')

var runningCard = 0
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

  cardTitle.addEventListener('click', function (){
    hide_container.appendChild(newcard)
    cardContainer.style.display = 'none'
    backbutton.style.display = 'block'

    backbutton.addEventListener('click', function(){
      cardContainer.appendChild(newcard)
      cardContainer.style.display = "flex"
      backbutton.style.display = 'none'
    })


  })
  

  // Add Task  POPUP visible
  addButton.addEventListener("click", function () {

    const taskPopup = document.getElementById("popupWindow-task");
    taskPopup.style.display = "flex";

    // runningCard = newcard;

    addTaskFormPopupButton.addEventListener('click',()=>addtask(innerDiv))
    
  });

  cardContainer.appendChild(newcard);


  deletButton.addEventListener("click", function () {

    cardContainer.removeChild(newcard);
   
  });

  





function addtask(innerDiv1) {
  
  var task = document.createElement("div");
  // runningCard.appendChild(newcard);

  // inner div content
  const taskElement = document.createElement("h3");
  const delete1 = document.createElement("button");
  const brTag = document.createElement("br");

  delete1.addEventListener("click", function () {
    taskElement.style.textDecoration = "line-through";
    delete1.style.display = "none";
  });

  delete1.innerText = "Mark Done";
  taskElement.innerText = taskList.value;

  task.appendChild(taskElement);
  task.appendChild(delete1);
  task.appendChild(brTag);
  innerDiv1.appendChild(task)
  // addTaskFormPopupButton.removeEventListener()
  // ()=>addtask(innerDiv)

  const taskPopup = document.getElementById("popupWindow-task");
  taskPopup.style.display = "none";
}

}

