
var popup = document.getElementById("popUp")
const cardContainer = document.getElementById("cardContainer")
var blurpage = document.getElementById("blur")
const ClosePopupTask = document.getElementById('closePopup1')
var addTaskFormPopupButton = document.getElementById('addPopup1')
var taskList = document.getElementById('InputTODO')
var hideMsg = document.getElementById('hide-msgText')
let backbutton = document.getElementById("back_button");
const hide_container = document.getElementById("hide_container");
//----------------
var cardId = 0;
var runningCard = null;
var singleCard = null;

let visible = false
function masterButton(){
    if(!visible){
    const popupWindow = document.querySelector(".popupWindow");
    popupWindow.style.display = "flex";
    blurpage.style.filter = "blur(4px)";   
    }else{
        const closePopup = document.querySelector(".popupWindow")
        closePopup.style.display = "none"
        blurpage.style.filter = "blur(0px)";
    }

}

function closePopup(){
    const closePopup = document.querySelector(".popupWindow")
    closePopup.style.display = "none"
    blurpage.style.filter = "blur(0px)"
}



function addcard(){

    const cardName = document.getElementById('inputTask').value // Card Name variable creaded
    if(cardName.trim() === ''){
        // console.log('ok')
        
        return;

    }
    cardId++
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
    innerDiv.classList.add('childCard')
    


    // visible button in name in card
    cardTitle.innerText = cardName
    deletButton.innerText = "Delete"
    addButton.innerText = '+'
    

    hideMsg.style.display = "none" // hide msg after clinking Add button 
    closePopup(); // Affer the add card, card will hidden

    
    // Add Task  POPUP visible
    addButton.addEventListener('click', function(){
        // this.AddDiv
    const taskPopup = document.getElementById('popupWindow-task')
    taskPopup.style.display = "flex"

    runningCard = newcard

    // addTaskFormPopupButton.addEventListener('click',addtask)

    

    })

    if (singleCard){
        hide_container.appendChild(newcard)
    }
    else{
        cardContainer.appendChild(newcard)
    }


    deletButton.addEventListener('click', function(){
        if (singleCard === newcard){
            singleCard = null
            hideAllcard(null)
        }
        cardContainer.removeChild(newcard)
    })
    


    // Add Task  POPUP Hidden
    // ClosePopupTask.addEventListener('click', function(){
    //     const taskPopup = document.getElementById('popupWindow-task')
    //     taskPopup.style.display = "none"
    // })

}
console.log(runningCard)

function addtask(){

    var innerDiv = document.createElement('div')
    runningCard.appendChild(innerDiv)
    

    // inner div content
    const taskElement = document.createElement('h3')
    const delete1 = document.createElement('button')
    const brTag = document.createElement('br')

    delete1.addEventListener('click', function(){
        taskElement.style.textDecoration = 'line-through'
        delete1.style.display = 'none'

    })

    delete1.innerText = 'Mark Done';
    taskElement.innerText = taskList.value


    innerDiv.appendChild(taskElement)
    innerDiv.appendChild(delete1)
    innerDiv.appendChild(brTag)

    const taskPopup = document.getElementById('popupWindow-task')
    taskPopup.style.display = "none"
}


const tasks = document.getElementById('task')

function hideAllcard(clickCard){
    const allcard = Array.from(document.getElementsByClassName('card'))
    allcard.forEach((card)=>{
        if (card !== clickCard){
            card.style.display = 'none';
        }else{
            if (card.classList.contains('hide_container')){
                card.style.display = 'block'
                card.classList.remove('hide_container')
                singleCard = null
            }

            else{
                card.style.display = ' block'
                card.classList.add('hide_container')
                singleCard = card
            }
        }
    })

    const hiddenCards = allcard.filter((card)=> card.style.display === 'none')
    if (hiddenCards.length > 0){
        tasks.classList.add('hide')
        backbutton.classList.remove("hide");
    }else{
        tasks.classList.remove('hide')
        backbutton.classList.remove('hide')
    }
}

function showAllcard() {
    const allcard = Array.from(document.getElementsByClassName('hide_container'))
    allcard.forEach((card) => {
    card.style.display = 'block'
    card.classList.remove('hide_container')
    });
    tasks.classList.remove("hide");
    backbutton.classList.add("hide");
  }

  function reverse(){

    showAllcard()
    const hiddenContainers = Array.from(document.getElementsByClassName("hide_container"));
    hiddenContainers.forEach((container) => {
        container.style.display = "block";
        container.style.flexDirection = "column";
      });

      if (runningCard) {
        singleCard = runningCard;
      } else {
        singleCard = null;
      }

      const hiddenCards = Array.from(document.getElementsByClassName('hide_container')[0].children)

      // append the hidden card in the card-arrange
      hiddenCards.forEach((card)=>{
        parent.appendChild(card)
      })
  }





// function addtask(){

       
//     // var parentCard = 



//     // Child div construction
//     var innerDiv = document.createElement('div');
//     // newcard.appendChild(innerDiv);        
//     innerDiv.classList.add('childCard');

//     // inner div content
//     const taskElement = document.createElement('h3');
//     const delete1 = document.createElement('button');
//     const brTag = document.createElement('br');

//     delete1.innerText = 'Mark Done';
//     taskElement.innerText = taskList.value;

//     innerDiv.appendChild(taskElement);
//     innerDiv.appendChild(delete1);
//     innerDiv.appendChild(brTag);

//     const taskPopup = document.getElementById('popupWindow-task');
//     taskPopup.style.display = "none";
// }






















// function addtask(){

       
//     // var parentCard = 



//     // Child div construction
//     var innerDiv = document.createElement('div');
//     // newcard.appendChild(innerDiv);        
//     innerDiv.classList.add('childCard');

//     // inner div content
//     const taskElement = document.createElement('h3');
//     const delete1 = document.createElement('button');
//     const brTag = document.createElement('br');

//     delete1.innerText = 'Mark Done';
//     taskElement.innerText = taskList.value;

//     innerDiv.appendChild(taskElement);
//     innerDiv.appendChild(delete1);
//     innerDiv.appendChild(brTag);

//     const taskPopup = document.getElementById('popupWindow-task');
//     taskPopup.style.display = "none";
// }       









// function addtask(){
//     // var AddDiv = this.addButton 

//     console.log("error")
//         // Child div constracution
//         var innerDiv = document.createElement('div')
        

//         innerDiv.classList.add('childCard')

        
        

//         // inner div containe
//         const taskElement = document.createElement('h3');
//         const delete1 = document.createElement('button')
//         const brTag = document.createElement('br')
        

//         delete1.innerText = 'Mark Done'
//         taskElement.innerText = taskList.value
        

//         innerDiv.appendChild(taskElement);
//         innerDiv.appendChild(delete1)
//         innerDiv.appendChild(brTag)
        
        
//         newcard.appendChild(innerDiv)
//         const taskPopup = document.getElementById('popupWindow-task')
//         taskPopup.style.display = "none"
// }


//------------------

 // console.log('print')

        // // Child div constracution
        // var innerDiv = document.createElement('div')
        

        // innerDiv.classList.add('childCard')

        
        

        // // inner div containe
        // const taskElement = document.createElement('h3');
        // const delete1 = document.createElement('button')
        // const brTag = document.createElement('br')
        

        // delete1.innerText = 'Mark Done'
        // taskElement.innerText = taskList.value
        

        // innerDiv.appendChild(taskElement);
        // innerDiv.appendChild(delete1)
        // innerDiv.appendChild(brTag)
        
        
        // newcard.appendChild(innerDiv)
        // const taskPopup = document.getElementById('popupWindow-task')
        // taskPopup.style.display = "none"