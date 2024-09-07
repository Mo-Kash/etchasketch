const container = document.querySelector("#container");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
let b2clicked = false;
let mouseDown = false;
var currColour = "black";
let eraser = false;
let defcol = false;
var currBoxes = 16;

function createGrid(x){
    for(var i=0;i<x;i++)
    {
        for(var j=0;j<x;j++)
        {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.setAttribute('draggable',"false");
            gridItem.style.backgroundColor = "#F8F8FF";
            gridItem.addEventListener("mousedown",()=>{
                mouseDown = true;
                gridItem.style.backgroundColor = penColour();
            });
            gridItem.addEventListener("mouseenter",()=>{
                if(mouseDown){
                    gridItem.style.backgroundColor = penColour();
                }
            });
            gridItem.addEventListener("mouseup",()=>{
                mouseDown = false;
            })
            gridItem.style.width = (960/x) + "px";
            gridItem.style.height = (960/x) + "px";

            container.appendChild(gridItem);
        };
    };
}

function deleteGrid(){
    container.innerHTML = '';
}

function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return RGBColor;
}

function penColour()
{
    if(eraser==true){
        currColour = "#F8F8FF";
    }
    else{
        if(b2clicked==true){
            currColour = randomRGB();
        }
        if(defcol==true){
            currColour = "black";
        }
    } 
    return currColour;
}


btn1.addEventListener("click",()=>{
    var boxes = prompt("Enter the number of boxes for side of square grid[max = 100]");
    currBoxes = boxes;
    if(boxes<=100){
        deleteGrid();
        createGrid(currBoxes);
        b2clicked = false;
        eraser = false;
        defcol = true;
    }
    else{
        alert("Input too high!");
    }
});

btn2.addEventListener("click",()=>{
    if(b2clicked==false){
        eraser = false;
        b2clicked = true;
        defcol = false;
    }
    else
    {
        b2clicked = false;
    }
});

btn3.addEventListener("click",()=>{
    if(eraser==false){
        eraser = true;
        b2clicked = false;
        defcol = false;
    }
    else{
        eraser = false;
    }
})

btn4.addEventListener("click",()=>{
    if(defcol==false){
        eraser = false;
        defcol = true;
        b2clicked = false;
    }
    else{
        defcol = false;
    }
})

btn5.addEventListener("click",()=>{
    deleteGrid();
    createGrid(currBoxes);
    b2clicked = false;
    eraser = false;
    defcol = true;
})

createGrid(currBoxes);
