const togglebtn = document.querySelector('.toggle');
const togglebtnicon = document.querySelector('.toggle i');
const dropdownmenu = document.querySelector('.dropdownmenu');



togglebtn.onclick = function(){
    dropdownmenu.classList.toggle('open');
    const isOpen = dropdownmenu.classList.contains('open');


    togglebtnicon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

const carousel = document.querySelector(".carousel");
const arrowbtns = document.querySelectorAll(".wrapper i");
const firstCarwidth = carousel.querySelector(".card").offsetWidth;
/* const carouselChildrens = [...carousel.children]; */

let isDragging = false, startX, startScrollLeft;

/* let cardPerView =  Math.round(carousel.offsetWidth / firstCarwidth);
 */
/* carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
}); */

/* carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
  */
arrowbtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        carousel.scrollLeft += btn.id === "left" ? - firstCarwidth : firstCarwidth;

    })
});

const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e)=>{
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging");
}

/* const infiniteScroll= () =>{
    if(carousel.scrollLeft === 0){
        console.log("si")
    }else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        console.log("no")
    }
}
 */
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
/* carousel.addEventListener("scroll", infiniteScroll); */



/* carrousel web */

const carouselweb = document.querySelector(".carouselweb"),
firstimg = carouselweb.querySelectorAll("img")[0]
arrowicons = document.querySelectorAll(".wrapperweb i");

let isDraggingstart = false, prevenPageX, prevScrollLeft ;


const showhideicons = () =>{

    let scrollWidthweb = carouselweb.scrollWidthweb - carouselweb.clientWidth;
    arrowicons[0].style.display= carouselweb.scrollLeft == 0? "none" : "block";
    arrowicons[1].style.display= carouselweb.scrollLeft == scrollWidthweb ? "none" : "block";
}

arrowicons.forEach(icon =>{
    icon.addEventListener("click", ()=>{
        let firstimgwidth = firstimg.clientWidth;
       carouselweb.scrollLeft += icon.id == "leftweb" ? -firstimgwidth : firstimgwidth;
       setTimeout(() => showhideicons(), 60);
    });
});

const dragStartweb = (e) =>{
    isDraggingstart = true;
    prevenPageX = e.pageX;
    prevScrollLeft = carouselweb.scrollLeft;
}

const draggingweb = (e) =>{

    if(!isDraggingstart)return;
    e.preventDefault();
    carouselweb.classList.add("dragging");
    let positionDiff = e.pageX - prevenPageX;
    carouselweb.scrollLeft = prevScrollLeft - positionDiff;
    showhideicons();
}

const dragstopweb = () =>{
    isDraggingstart = false;
    carouselweb.classList.remove("dragging");
}

carouselweb.addEventListener("mousemove", draggingweb);
carouselweb.addEventListener("mousedown", dragStartweb);;
carouselweb.addEventListener("mouseup", dragstopweb);
carouselweb.addEventListener("mouseleave", dragstopweb);

/* btn expandir */
const btnexpandir = document.getElementById('btnexpandir');
const iconexpandir = document.getElementById('iconexpandir');

btnexpandir.addEventListener('click', ()=>{
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen();
        iconexpandir.src = 'public/src/suprimir.png';
    }else{
        document.exitFullscreen();
        iconexpandir.src = 'public/src/expandir.png';
    }
});