console.log("hello world");

window.addEventListener('load',()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual =document.querySelector(".visual");
    const colors =[
    "red",
    "greenyellow",
    "lightseagreen",
    "yellow",
    "purple",
    "orangered"
    ];

    

    // get the sound here
    pads.forEach((pad, index)=>{
        pad.addEventListener("click",function(){
            sounds[index].currentTime=0;
            sounds[index].play();

            createBubbles(index);
        })
    });

    //function for bubbles

    const createBubbles = (index)=>{
        const bubbles = document.createElement("div");
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation= "jump 1s ease";
        bubbles.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    }
});


