    var input = document.getElementById("input")
    var ulParent = document.getElementById("ulParent")   
    var btnEdt; 
function add(){
    ////////declare variable//////////
    var num = document.getElementById("num")
    var liElement = document.createElement("li")
    var div = document.createElement("div")
    var btn = document.createElement("button")
    var liTxt = document.createTextNode(input.value)
    
    if(!input.value){
        return
    }
    ////////////setArrtibute///////////
    div.className = "btn-wraper"
    btn.innerHTML = "<i class='fa-solid fa-trash'></i>"
    btn.setAttribute("onclick","del(this)")
    var btnEdit = document.createElement("button")
    btnEdit.style.backgroundColor = "rgb(105, 161, 105)"
    btnEdit.setAttribute("onclick","edt()")
    btnEdit.innerHTML = "<i class='fa-sharp fa-solid fa-pen'></i>"

/////////////////make append child//////////////
div.appendChild(btnEdit)
div.appendChild(btn)
liElement.appendChild(liTxt)
liElement.appendChild(div)
ulParent.appendChild(liElement)
++num.innerHTML
input.value = ""
//////return editbutton for make editbutton////
btnEdt = btnEdit
liText = liTxt
}

function del(clr){
    if(clr){ 
        clr.parentNode.parentNode.remove()
        --num.innerHTML
        return
    }
    ulParent.innerHTML = ""
    input.value = ""
    num.innerHTML = 0
}

function edt(){
    var newValue = btnEdt.parentNode.previousSibling.nodeValue
    var newValue1 = prompt("Edit:",newValue)
    newValue = newValue1
    if(!newValue){
        return
    }
    btnEdt.parentNode.previousSibling.nodeValue =  newValue
}





var maxLength = 25;
var userData = -1;
