let ul=document.querySelector("ul");
let button=document.getElementById("add");
let input=document.getElementById("newtodo");

var deleteTodo = function(){
    let todoLi=this.parentNode;
    todoLi.remove();
}
var togglecheck=function(){
    let parent= this.parentNode;
    parent.classList.toggle("checked");
}

button.onclick=function(){
    if(input.value!=""){
    let li=document.createElement("li");
    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.onclick=togglecheck;
    
    let label=document.createElement("label");
    label.innerHTML=input.value;

    let deletebutton=document.createElement("button");
    deletebutton.innerHTML="Delete";
    deletebutton.className="delete";
    deletebutton.onclick=deleteTodo; 

    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deletebutton);
    
    input.value="";
    }else{
        return;
    }
}
var deleteTodo = function(){
    let todoLi=this.parentNode;
    todoLi.remove();
}

