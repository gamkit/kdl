!function initNavbar() {
    const headerNavbar = document.querySelector('.header__navbar').cloneNode(true);;
    const modalMenuNavbar = document.querySelector('.modal-menu__navbar');

    headerNavbar.firstElementChild.classList.remove('row-mg');
    
    modalMenuNavbar.innerHTML = headerNavbar.innerHTML.replace(/header/ig, "modal-menu");

    [...modalMenuNavbar.querySelectorAll('.navbar-item--sub')].forEach(item => {
    
        item.firstElementChild.addEventListener('click', function(e) {
           e.preventDefault();
        })
    })
}();