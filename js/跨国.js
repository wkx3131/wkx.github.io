let topdiv = document.querySelector('.fou-dong')
let as =0
document.addEventListener("mousemove",function(event){
    if(event.clientY<100 &&as ==0){
        topdiv.style.top="0px"
        as = 1
    }else if(event.clientY>100 && as ==1){
        topdiv.style.top="-60px"
        as = 0
    }
})