const canvas = document.querySelector("canvas"),
toolbtns = document.querySelectorAll(".tool"),
fillcolor = document.querySelector("#fill-color"),
sizleslider = document.querySelector("#size-slider"),
colorsbts = document.querySelectorAll(".colors .option"),
colorpicker = document.querySelector("#color-picker"),
sabeimg = document.querySelector(".save-img"),
clearcanvas = document.querySelector(".clear-canvas"),
ctx = canvas.getContext("2d");

let prevmousex, prevmousey, snapshot,
 isDrawing = false,
selectedtool = "brush", 
brushwidth = 5,
selectedcolor = "#000";

const setCanvasBackground = () =>{
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = selectedcolor;
}

window.addEventListener("load", ()=>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
});

const drawRect = (e) =>{
    if(!fillcolor.checked){
        return ctx.strokeRect(e.offsetX, e.offsetY, prevmousex - e.offsetX, prevmousey - e.offsetY);
    }
    ctx.fillRect(e.offsetX, e.offsetY, prevmousex - e.offsetX, prevmousey - e.offsetY);
}

const drawcircle = (e) =>{
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow((prevmousex - e.offsetX), 2) + Math.pow((prevmousey - e.offsetY), 2));
    ctx.arc(prevmousex, prevmousey, radius, 0, 2 * Math.PI);
    fillcolor.checked ?ctx.fill() : ctx.stroke();
}

const drawline = (e)=>{
    ctx.beginPath();
    ctx.moveTo(prevmousex, prevmousey);
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
}

const drawtriangle = (e)=>{
    ctx.beginPath();
    ctx.moveTo(prevmousex, prevmousey);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineTo(prevmousex * 2 - e.offsetX, e.offsetY);
    ctx.closePath();
    fillcolor.checked ?ctx.fill() : ctx.stroke();
}

const startDraw = (e) =>{
    isDrawing = true;
    prevmousex = e.offsetX;
    prevmousey = e.offsetY;
    ctx.beginPath();
    ctx.lineWidth = brushwidth;
    ctx.strokeStyle = selectedcolor;
    ctx.fillStyle =selectedcolor;
    snapshot =  ctx.getImageData(0,0, canvas.width, canvas.height);
}

const drawing = (e) =>{
    if(!isDrawing) return;
    ctx.putImageData(snapshot, 0, 0);
    if(selectedtool === "brush" || selectedtool === "eraser"){
        ctx.strokeStyle = selectedtool === "eraser" ? "#fff" : selectedcolor;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }else if(selectedtool === "rectangle"){
        drawRect(e);
    }else if(selectedtool === "circle"){
        drawcircle(e);
    }else if(selectedtool === "line"){
        drawline(e);
    }else if(selectedtool == "triangle"){
        drawtriangle(e);
    }
  
  

}

toolbtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedtool = btn.id;
        console.log(selectedtool);
    })
});

colorsbts.forEach(btn =>{
    btn.addEventListener("click", () =>{
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
        selectedcolor = window.getComputedStyle(btn).getPropertyValue("background-color");
    })
})

colorpicker.addEventListener("change", () =>{
    colorpicker.parentElement.style.background = colorpicker.value;
    colorpicker.parentElement.click();
});

clearcanvas.addEventListener("click", () =>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    setCanvasBackground();
});

sabeimg.addEventListener("click", ()=>{
    const link = document.createElement("a");
    link.download = `${Date.now().jpg}`
    link.href = canvas.toDataURL();
    link.click();
})

sizleslider.addEventListener("change", ()=> brushwidth = sizleslider.value);

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);