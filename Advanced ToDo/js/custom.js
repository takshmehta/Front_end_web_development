var add = document.getElementById("add");
var removeAll = document.getElementById("removeall");
var list = document.getElementById("list");


//configuring removeAll button
removeAll.onclick = function(){
    list.innerHTML = '';
}

add.onclick = function(){
    addlis(list);
    document.getElementById("userinput").value = '';
    document.getElementById("userinput").focus() ;
}

function addlis(targetUL){
    var inputText = document.getElementById('userinput').value;
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement("button");
    
    if (inputText !== ''){
        removeButton.className = "btn btn-sm btn-danger";
        removeButton.innerHTML = "&times;"
        removeButton.setAttribute('onclick', 'removeMe(this)')
        
        
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUL.appendChild(li);
    }else{
        alert("Please enter a todo !")
    }
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}
function enterPressed(e,tt){
    if (e.keyCode == 13){
         addlis(list);
    document.getElementById("userinput").value = '';
    document.getElementById("userinput").focus() ;
}
}



