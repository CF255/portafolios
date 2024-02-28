let optionsbuttons = document.querySelectorAll(".option-button");
let advancedoptionbutton = document.querySelectorAll(".adv-option-button");
let fontname = document.getElementById("fontname");
let fontsizeref = document.getElementById("fontsize");
let writinarea = document.getElementById("text-input");
let linkbutton = document.getElementById("createlink");
let alignbuttons = document.querySelectorAll(".align");
let spacingbuttons = document.querySelectorAll(".spacing");
let formatbuttons = document.querySelectorAll(".format");
let scriptbuttons = document.querySelectorAll(".script");



/* list of fontlist */

let fontlist = ["Arial",
 "Verdana",
 "Times New Roman",
 "Garamond",
 "Georgia",
 "Cursive New",
"cursive"];

 /* initial settings */

 const initializer = () =>{

    /* functionfor higlighn */

    highlighter(alignbuttons, true);
    highlighter(spacingbuttons, true);
    highlighter(formatbuttons, false);
    highlighter(scriptbuttons, true);


    fontlist.map((value) =>{
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontname.appendChild(option);
    });


    for(let i = 1; i<=7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontsizeref.appendChild(option);
    }


    fontsizeref.value = 3;
 }

 const modifytext = (command, defaultUi, value) =>{
    document.execCommand(command, defaultUi, value);
 };

 optionsbuttons.forEach((button) => {
    button.addEventListener("click", () =>{
        modifytext(button.id, false, null);
    });
 });


 /* highlight click button */

 const highlighter = ( className, needsRemoval) =>{
    className.forEach((button) =>{
        button.addEventListener("click", ()=>{
            if(needsRemoval){
                let alreadyActive = false;

                if(button.classList.contains("active")){
                    alreadyActive = true;
                }

                highlighterRemover(className);
                if(!alreadyActive){
                    button.classList.add("active");
                }
            }else{
                button.classList.toggle("active");
            }
        });
    });
 };

 const highlighterRemover = ( className) =>{
    className.forEach((button) =>{
        button.classList.remove("active");
    })
 }


 advancedoptionbutton.forEach((button) =>{
    button.addEventListener("change", ()=>{
        modifytext(button.id, false, button.value);
    });
 });


 linkbutton.addEventListener("click", () =>{
    let userlink = prompt("enter a URL");

    if(/http/i.test(userlink)){
        modifytext(linkbutton.id, false, userlink);
    }else{
        userlink= "http://" + userlink;
        modifytext(linkbutton.id, false, userlink);
    }
 })

 window.onload = initializer();
