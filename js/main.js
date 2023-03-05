import Typed from "../typed.js/src/typed.js";
// Music Part 

let playOrPause = true;

function runMusic()
{
    const theAudio = document.querySelector("#start-music");
    if(playOrPause)
        theAudio.play();
    else 
        theAudio.pause();
}

function toggleMusic()
{
    const stop = document.querySelector(".music .pause");
    const run = document.querySelector(".music .play");
    const parent = document.querySelectorAll(".music");

    parent.forEach((e)=>{
        e.addEventListener("click",function()
        {
            stop.parentElement.classList.toggle("d-none");
            run.parentElement.classList.toggle("d-none");
            if(playOrPause)
                playOrPause = false
            else
                playOrPause = true

            runMusic();
        })
    })
    
}
toggleMusic();
document.querySelector("#start-music").addEventListener("ended", function() 
{
     runMusic();
});






// Warning Part
let available = true;

function warning(content)
{
    available = false
    const warning = document.querySelector("#warning");
    warning.children[0].innerHTML = content;
    warning.style.opacity = 1;
    setTimeout(()=>{warning.style.opacity = 0;available=true},5000)
}

document.querySelector("[name=valueSeacrh]").addEventListener("input",async ()=>{
    (available) ? warning("We dont't have movies database now") : available = available;
})




// Me Section Part 
let runIntroduce = true;
function introduceMe()
{
    if(runIntroduce != true)
        return;

    var typed = new Typed(".me h4",{
        strings:["<h4 class='mb-4'>Abdelrhman Khalifa (GRAND)</h4><p>I am 20 years old front-end developer for websites. I started my learning journey in late 2021, and the most useful lessons are articles.</p>"],
        loop:false,
        typeSpeed:80,
        cursorChar: '',
    });
    runIntroduce = false ;
}
window.onscroll = function(){
    const me = document.querySelector(".me");
    if(window.scrollY > me.offsetTop - 800)
    {
        introduceMe();
    }
};
