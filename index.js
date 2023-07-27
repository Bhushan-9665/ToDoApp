


function masterButton(){
    const popupWindow = document.querySelector(".popupWindow");
    popupWindow.style.display = "flex";
    const blur = document.querySelector("body")
    blur.style.backdropFilter = "blur(5px)"

}

function closePopup(){
    const closePopup = document.querySelector(".popupWindow")
    closePopup.style.display = "none"
}