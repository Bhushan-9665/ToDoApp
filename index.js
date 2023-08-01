// dustbin--------------------------------------

// popup = classList.add(".open-popup")
//     console.log()



// dustbin--------------------------------------

var popup = document.getElementById("popUp")
const cardContainer = document.getElementById("cardContainer")
const cardName = document.getElementById('inputTask') // Card Name variable creaded
const ClosePopupTask = document.getElementById('closePopup1')
const addTaskFormPopupButton = document.getElementById('addPopup1')
const taskList = document.getElementById('InputTODO')


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
    var ItemList = document.createElement('div')
    var task = document.createElement('h3')
    var deletButton = document.createElement('button')
    var addButton = document.createElement('button')
    // Append a Element as per reured position
    newcard.appendChild(cardTitle)
    newcard.appendChild(ItemList)
    newcard.appendChild(deletButton)
    newcard.appendChild(ItemList)
    newcard.appendChild(task) //--------------
    newcard.appendChild(addButton)
    cardContainer.appendChild(newcard)

    // Add a style by using add class method
    newcard.classList.add('card')


    // visible button in name in card
    cardTitle.innerText = cardName.value
    deletButton.innerText = "Delete"
    addButton.innerText = '+'
    




    // Add Task  POPUP visible
    addButton.addEventListener('click', function addtask(){
        const taskPopup = document.getElementById('popupWindow-task')
        taskPopup.style.display = "flex"
    })


    // Add Task  POPUP Hidden
    ClosePopupTask.addEventListener('click', function addtask(){
        const taskPopup = document.getElementById('popupWindow-task')
        taskPopup.style.display = "none"
    })

    // Add task in Popup card Using Add button
    addTaskFormPopupButton.addEventListener('click', function addtask(){
        task.innerText = taskList.value
        ItemList.appendChild(task.innerText)
        
        const taskPopup = document.getElementById('popupWindow-task')
        taskPopup.style.display = "none"
    })

    closePopup(); // Affer the add card, card will hidden



    
    


}

