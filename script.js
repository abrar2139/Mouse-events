const elem = document.querySelectorAll(".elem");
const image = document.querySelector(".elem img");


elem.forEach(function (value) {
    
    value.addEventListener("mousemove",function(details) {
        value.childNodes[1].style.left=details.x+"px";
    })
    value.addEventListener("mouseenter",function() {
        value.childNodes[1].style.opacity=1;
      })
      value.addEventListener("mouseleave",function() {
        value.childNodes[1].style.opacity=0;
      })

})



