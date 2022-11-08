
var modal = document.getElementById("theModal");

var bttn = document.getElementById("sub-button");

var modalBox = document.getElementById("modalText");

//Modal popup
bttn.onclick = function () {
    modalBox.innerHTML = 'New Text is now working'; 
    modal.style.display = "block";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }


}