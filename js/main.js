// function tabView(e){
//     console.log(e);
//     let className  = e.target.name;
//     console.log(className);
//     let condition = className === 'one' ?  'ps1' : "ps2";
//     let hide = className === 'one' ? "ps2" : className === "two" ? "ps1": "ps3"
//     let element = document.getElementById(condition);
//     let element2 = document.getElementById(hide);
//     element.style.display = 'block'
//     element2.style.display = 'none';


//      let hidebutton = className === 'one' ? "psb2" : className === "two" ? "psb1": "ps3"
//      let element3 = document.getElementById(e.target.id);
//      element3.style.fontWeight = "bold";

//      let element4 = document.getElementById(hidebutton);
//      element3.style.fontWeight = "400";
    
// }


//Button's
var elementthree = document.getElementById("psb3")
var elementtwo = document.getElementById("psb2")
var elementone = document.getElementById("psb1")

//Gallery section's
var galleryone = document.getElementById("ps1")
var gallerytwo = document.getElementById("ps2")
var gallerythree = document.getElementById("ps3")

var transitionone = document.querySelector("one")

function buttonone(e){
    galleryone.style.display="block"
    gallerytwo.style.display="none"
    gallerythree.style.display="none"
    elementone.style.fontWeight="bold"
    elementtwo.style.fontWeight="400"
    elementthree.style.fontWeight="400"
}

function buttontwo(e){
    gallerytwo.style.display="block"
    galleryone.style.display="none"
    gallerythree.style.display="none"
    elementone.style.fontWeight="400"
    elementtwo.style.fontWeight="bold"
    elementthree.style.fontWeight="400"
}

function buttonthree(e){
    gallerythree.style.display="block"
    galleryone.style.display="none"
    gallerytwo.style.display="none"
    elementone.style.fontWeight="400"
    elementtwo.style.fontWeight="400"
    elementthree.style.fontWeight="bold"
}