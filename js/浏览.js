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

// 
let as1 = document.querySelector('.as1')
let as2 = document.querySelector('.as2')
let as3 = document.querySelector('.as3')
let as4 = document.querySelector('.as4')
let as5 = document.querySelector('.as5')
let box = document.querySelectorAll('.box')
let show = document.querySelector('.show')
console.log(as1);
box.forEach(function(box,index){
    box.addEventListener('click',function(){
        show.style.top="-10px"
        if(index==0){
            as1.style.display="block"
            as2.style.display="none"
            as3.style.display="none"
            as4.style.display="none"
            as5.style.display="none"
        }else if(index==1){
            as2.style.display="block"
            as1.style.display="none"
            as3.style.display="none"
            as4.style.display="none"
            as5.style.display="none"  
        }else if(index==2){
            as3.style.display="block"
            as1.style.display="none"
            as2.style.display="none"
            as4.style.display="none"
            as5.style.display="none"  
        }else if(index==3){
            as4.style.display="block"
            as1.style.display="none"
            as3.style.display="none"
            as2.style.display="none"
            as5.style.display="none"  
        }else if(index==4){
            as5.style.display="block"
            as1.style.display="none"
            as3.style.display="none"
            as4.style.display="none"
            as2.style.display="none"  
        }
        window.scrollTo({//跳转至
            top: 700,
            behavior: "smooth"//光滑
        })
    })
})