
var popup = document.getElementById("popUp")
const cardContainer = document.getElementById("cardContainer")
const cardName = document.getElementById('inputTask') // Card Name variable creaded
const ClosePopupTask = document.getElementById('closePopup1')
var addTaskFormPopupButton = document.getElementById('addPopup1')
var taskList = document.getElementById('InputTODO')
var hideMsg = document.getElementById('hide-msgText')


function masterButton(){
    const popupWindow = document.querySelector(".popupWindow");
    popupWindow.style.display = "flex";

}

function closePopup(){
    const closePopup = document.querySelector(".popupWindow")
    closePopup.style.display = "none"
}



function addcard(){
    // create a temparary Element
    var newcard = document.createElement("div")
    var cardTitle = document.createElement('h2')
    var innerDiv = document.createElement('div')
    var deletButton = document.createElement('button')
    var addButton = document.createElement('button')
    
    // Append a Element as per reured position
    cardContainer.appendChild(newcard)
    newcard.appendChild(cardTitle)
    newcard.appendChild(innerDiv)
    newcard.appendChild(deletButton)
    newcard.appendChild(addButton)

    // Add a style by using add class method
    newcard.classList.add('card')
    deletButton.classList.add('deleteName')
    addButton.classList.add('addTaskName')
    


    // visible button in name in card
    cardTitle.innerText = cardName.value
    deletButton.innerText = "Delete"
    addButton.innerText = '+'
    



    hideMsg.style.display = "none" // hide msg after clinking Add button 
    closePopup(); // Affer the add card, card will hidden


    // Add task in Popup card Using Add button -------------------------------------------
    addTaskFormPopupButton.addEventListener('click', function(){

        // Child div constracution
        var innerDiv1 = document.createElement('div')
        innerDiv.appendChild(innerDiv1)

        innerDiv1.classList.add('childCard')

        
        

        // inner div containe
        const taskElement = document.createElement('h3');
        const delete1 = document.createElement('button')
        const brTag = document.createElement('hr')
        

        delete1.innerText = 'Mark Done'
        taskElement.innerText = taskList.value
        

        innerDiv1.appendChild(taskElement);
        innerDiv1.appendChild(delete1)
        innerDiv1.appendChild(brTag)
        
        
        
        const taskPopup = document.getElementById('popupWindow-task')
        taskPopup.style.display = "none"
})

    // Add Task  POPUP visible
    addButton.addEventListener('click', function(){
        const taskPopup = document.getElementById('popupWindow-task')
        taskPopup.style.display = "flex"
    })


    // Add Task  POPUP Hidden
    ClosePopupTask.addEventListener('click', function(){
        const taskPopup = document.getElementById('popupWindow-task')
        taskPopup.style.display = "none"
    })

    


    



    
    


}


