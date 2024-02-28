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

