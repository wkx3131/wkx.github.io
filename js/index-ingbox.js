let images = document.querySelector(".images")
let index = 0
let time
function position() {
    images.style.left = (index * -100) + "%"
}
function add() {
    if (index >= 1) {
        index = 0
    } else {
        index++
    }
}
function desc() {
    if (index < 1) {
        index = 1
    } else {
        index--
    }
}
function timer() {
    time = setInterval(() => {
        index++
        desc()
        add()
        position()
    }, 6000)
}
timer()

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
    

//禁止缩放
// window.addEventListener("load", function () {
// 	const keyCodeMap = {
// 		91: true, // command
// 		61: true,
// 		107: true, // 数字键盘 +
// 		109: true, // 数字键盘 -
// 		173: true, // 火狐 - 号
// 		187: true, // +
// 		189: true, // -
// 	};
// document.onkeydown = function (event) {
//     const e = event || window.event;
//     const ctrlKey = e.ctrlKey || e.metaKey;
//     if (ctrlKey && keyCodeMap[e.keyCode]) {
//         e.preventDefault();
//     } else if (e.detail) {
//         // Firefox
//         event.returnValue = false;
//     }
// }
// document.body.addEventListener(
//     "wheel",
//     (e) => {
//         if (e.ctrlKey) {
//             if (e.deltaY < 0) {
//                 e.preventDefault();
//                 return false;
//             }
//             if (e.deltaY > 0) {
//                 e.preventDefault();
//                 return false;
//             }
//         }
//     },
//     { passive: false }
// )
// });

//首页动画
let tan = document.getElementById('tan')
let suo = document.getElementById('suo')
let shijie = document.getElementById('shijie')
window.onload = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    tan.style.left='0px';
    suo.style.right='0px';
    shijie.style.top='0px';
    setTimeout(() => {
        topdiv.style.top="0px"
    }, 1500);
    setTimeout(() => {
        topdiv.style.top="-60px"
    }, 2500);
}

// document.addEventListener('scroll',function(event){
//     if(window.pageYOffset>500){
//         console.log("1");
//     }else if(window.pageYOffset<500){
//         console.log("2");
//     }
// })