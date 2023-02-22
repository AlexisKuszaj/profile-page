console.log("the owls are not what they seem");

var username = document.querySelector("#username");


function edit() {
    username.innerText = "Sonic the Hedgehog";
}


function hide(id){
    var element = document.getElementById(id);
    element.remove()
}
function hide2(element){
    element.remove()
}
