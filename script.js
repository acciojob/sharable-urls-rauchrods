// your code here
let button = document.querySelector("#button");
let nameobj  = document.querySelector("#name");
let yearobj  = document.querySelector("#year");
let urlobj  = document.querySelector("#url");
var form= document.querySelector("form");

button.addEventListener("click",()=>{
    let nametxt = nameobj.value;
    let yeartxt = yearobj.value;
    if(nametxt=="" && yeartxt==""){
      urlobj.innerText = urlobj.innerText+  "yo";
    }
    else if(nametxt!="" && yeartxt==""){
        urlobj.innerText = urlobj.innerText+  `?name=${nametxt}`;
    }
    else if(nametxt=="" && yeartxt!=""){
        urlobj.innerText = urlobj.innerText+  `?year=${yeartxt}`;
    }
    else{
        urlobj.innerText = urlobj.innerText+  `?name=${nametxt}&year=${yeartxt}`; 
    }
});

form.addEventListener('submit', (e)=>{
     e.preventDefault();
});