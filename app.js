let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let img3 = document.querySelector('#img3');
let img4 = document.querySelector('#img4');
let Btn1 = document.querySelector('.Btn1');
let Btn2 = document.querySelector('.Btn2');
let containPara2 = document.querySelector('.contain-para2');
let containPara1 = document.querySelector('.contain-para1');

Btn2.onclick = () =>{
    Btn2.style.color= "green"
    containPara1.style.display= "none"
    containPara2.style.display= "block"
}
Btn1.onclick = () =>{
    Btn2.style.color= "blue"
    containPara2.style.display= "none"
    containPara1.style.display= "block"
}

img1.onclick =()=>{
    displayUser = 1;
    if(displayUser == 1){
        img1.style.display= "none"
        img2.style.display= "inline"
        img3.style.display= "none"
        img4.style.display= "none"
    }   
}
img2.onclick =()=>{
    displayUser = 1;
    if(displayUser == 1){
        img1.style.display= "none"
        img2.style.display= "none"
        img3.style.display= "inline"
        img4.style.display= "none"
    }   
}
img3.onclick =()=>{
    displayUser = 1;
    if(displayUser == 1){
        img1.style.display= "none"
        img2.style.display= "none"
        img3.style.display= "none"
        img4.style.display= "inline"
        console.log(displayUser)
    }   
}
img4.onclick =()=>{
    displayUser = 1;
    if(displayUser == 1){
        img1.style.display= "inline"
        img2.style.display= "none"
        img3.style.display= "none"
        img4.style.display= "none"
        console.log(displayUser)
    }   
}

