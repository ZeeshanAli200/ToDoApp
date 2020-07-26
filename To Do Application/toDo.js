
var unordrList = document.getElementById('uList')
var delAllbtn=document.getElementById('delAll');
function delallEle(){
    unordrList.innerHTML=""
}
function addingItem() {
    var inTodo = document.getElementById("InpDo")
    if (inTodo.value == "") {
        alert("Please add item")
    }
    else {
        unordrList.setAttribute("class","ulList")
        var li_Ele = document.createElement('li');
        var textInp = document.createTextNode(inTodo.value)
        li_Ele.appendChild(textInp)
        unordrList.appendChild(li_Ele)
        inTodo.value = ""
        // delbutton
        var delBtn = document.createElement("button")
        var textInDel = document.createTextNode("Delete")
        delBtn.setAttribute("onclick", "deleteCurr(this)")

        delBtn.appendChild(textInDel)
        li_Ele.appendChild(delBtn)
        delBtn.setAttribute("class", "rounded-pill Listbtn ml-4 ")
        //  edit btn
        var editbtnCreate=document.createElement("button")
        var editbtnText=document.createTextNode("Edit")
        editbtnCreate.appendChild(editbtnText)
        li_Ele.appendChild(editbtnCreate)
        editbtnCreate.setAttribute("class","rounded-pill Listbtn ml-1 ")
        editbtnCreate.setAttribute("onclick", "editmyList(this)")

    }
}
function editmyList(e){
    var editOpt=prompt("Edit your list!",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=editOpt  
    }
function deleteCurr(e){
    e.parentNode.remove()
}