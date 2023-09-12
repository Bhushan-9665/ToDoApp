var popup = document.getElementById("popUp");
const cardContainer = document.getElementById("cardContainer");
var main = document.getElementById("main");
const ClosePopupTask = document.getElementById("closePopup1");
// var addTaskFormPopupButton = document.getElementById("addPopup1");
var taskList = document.getElementById("InputTODO");
var hideMsg = document.getElementById("hide-msgText");
let backbutton = document.getElementById("back_button");
const hide_container = document.getElementById("hide_container");
var appendTasklistdiv = document.getElementById("select-div");
taskPopupJS =document.querySelector('body')

// const cardArr = [];

// var runningCard = 0;
//----------------

let visible = false;
function masterButton() {
  if (!visible) {
    const popupWindow = document.querySelector(".popupWindow");
    popupWindow.style.display = "flex";
    main.classList.add('blur')
  } else {
    const closePopup = document.querySelector(".popupWindow");
    closePopup.style.display = "none";
    main.classList.remove('blur')
  }
}

function closePopup() {
  const closePopup = document.querySelector(".popupWindow");
  closePopup.style.display = "none";
  main.classList.remove('blur')
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


  deletButton.addEventListener('click', function (){
    cardContainer.removeChild(newcard)
  })


  // Add Task  POPUP visible
  addButton.addEventListener("click", function () {
    main.classList.add('blur')
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
      console.log('work3')
      popupWindowTask.classList.add('hide')
      main.classList.remove('blur')
      let Task = document.createElement("div");
      let TaskName = document.createElement("span");
      let TaskDelete = document.createElement("button");

      Task.appendChild(TaskName);
      Task.appendChild(TaskDelete);

      TaskName.innerText = InputTask.value;
      TaskDelete.innerText = "Mark Done";

      innerDiv.appendChild(Task);


      popupWindowTask.style.display = 'none'
      popupWindowTask.innerText = ""; 


      TaskDelete.addEventListener('click', function(){
        TaskName.style.textDecoration = 'line-through'
        TaskDelete.style.display = 'none'
        
    
      })
      
      
      
    });
    closeButton.addEventListener("click", function () {
      popupWindowTask.innerText = "";
      popupWindowTask.style.display = 'none'
    });
    
  });


  cardTitle.addEventListener("click", function () {
    backbutton.style.display = 'flex'
    cardContainer.classList.add('hide')
    hide_container.classList.remove('hide')

    let copycard = newcard.cloneNode(true)
    hide_container.appendChild(copycard); 

    // console.log([hide_container])

    copycard.lastElementChild.addEventListener('click',function(){
      console.log([copycard]) 
      // addButton.addEventListener("click", function () {
        main.classList.add('blur')
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
          console.log('work-2')
          
          console.log(AddButton)
          popupWindowTask.classList.add('hide')
          main.classList.remove('blur')
          let Task = document.createElement("div");
          let TaskName = document.createElement("span");
          let TaskDelete = document.createElement("button");
    
          Task.appendChild(TaskName);
          Task.appendChild(TaskDelete);
    
          TaskName.innerText = InputTask.value;
          TaskDelete.innerText = "Mark Done";
          
          let copycard1 = copycard.children[1]
          // copycard.nextChildElement.nextChildElement.appendChild(Task);
          copycard1.appendChild(Task)
    
    
          popupWindowTask.style.display = 'none'
          popupWindowTask.innerText = ""; 
    
          TaskDelete.addEventListener('click', function(){
            TaskName.style.textDecoration = 'line-through'
            TaskDelete.style.display = 'none'
        
        });
        closeButton.addEventListener("click", function () {
          popupWindowTask.innerText = "";
          popupWindowTask.style.display = 'none'
        });
        
      });
    
      
  })
    
    
 
    
  });
  
}


function back () {
  backbutton.style.display = 'none'
  cardContainer.classList.remove('hide')
  hide_container.classList.add('hide')
  
 
   clonecard = document.getElementsByClassName('childCard')
  if(clonecard > 0){
    newcard.appendChild(innerDiv)
  }
  hide_container.innerText = ''
  // console.log([newcard])
  // innerDiv = appendChild(Task)
  // newcard1.appendChild(Task)

  
};

