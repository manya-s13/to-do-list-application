const enter = document.querySelector("input");
const btn = document.querySelector("button");
const task = document.querySelector("#list-container");

btn.addEventListener("click",()=>{
    if(enter.value === ''){
        alert("you must write something");
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = enter.value;
    task.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    savedata();
})

task.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data",task.innerHTML);
}

const showtask = () =>{
    task.innerHTML = localStorage.getItem("data");
}
showtask();