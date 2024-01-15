let inputbox=document.getElementById('inputbox');
let list=document.getElementById('list');

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something");
    }
    else{
       let li=document.createElement("li");
       li.innerHTML=inputbox.value;
       list.appendChild(li);//for display
       //for cross icon
       let span = document.createElement("span");
       span.innerHTML="\u00d7" //cross code
       li.appendChild(span);
    }
    inputbox.value='';
    saveData();//for save data
}



// for new text adding

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
         e.target.classList.toggle("checked");
         saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);



//for saving data
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
//for calling this function
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();