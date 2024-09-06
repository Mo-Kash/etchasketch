const container = document.querySelector("#container");
function createGrid(x){
    for(var i=0;i<x;i++)
    {
        for(var j=0;j<x;j++)
        {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");

            gridItem.style.width = (960/x) + "px";
            gridItem.style.height = (960/x) + "px";

            container.appendChild(gridItem);
        };
    };
}
function deleteGrid(){
    container.innerHTML = '';

}
function hovereffect(){
    const element = document.querySelectorAll(".grid-item");

    element.forEach((i) => {
        i.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        });
    });
}

createGrid(16);
hovereffect();
const btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    var boxes = prompt("Enter the number of boxes:");
    deleteGrid();
    createGrid(boxes);
    hovereffect();
});


