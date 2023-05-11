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
    
    if(!input.value || !input.value.trim()){
        return
    }
    ////////////setArrtibute///////////
    div.className = "btn-wraper"
    btn.innerHTML = "<i class='fa-solid fa-trash'></i>"
    btn.setAttribute("onclick","del(this)")
    var btnEdit = document.createElement("button")
    btnEdit.style.backgroundColor = "rgb(105, 161, 105)"
    btnEdit.setAttribute("onclick","edt(this)")
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

function edt(condition){
   var oldValue = condition.parentNode.previousSibling.nodeValue
   var newValue1 = prompt("Edit:",oldValue)
    
    if(!newValue1){
        return
    }
    condition.parentNode.previousSibling.nodeValue = newValue1
}
