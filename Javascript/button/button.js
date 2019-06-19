var button=document.querySelector("button");
button.addEventListener("click",function(){
    var body=document.querySelector("body");
    //body has background, not color attribute
    //body.style.background="purple";
    body.classList.toggle("clicked");
    
});
