import Helper from '../helper';

const modalsWrap = document.querySelector('.modals__wrap');



declareModal('.modal-menu', '.header__btn-hamburger');


// 
function declareModal(modalName, modalOpenBtn, callback = null){
    let modal = modalsWrap.querySelector(modalName);
    let btn = document.querySelector(modalOpenBtn);
    let closeBtn = modal.querySelector('.modal-menu__btn-close')
    
    if(Helper.elementExists(closeBtn)) {
        closeBtn.addEventListener('click', (e) => {
   
            toggleModal(modal, false, callback)
        })
    }

    if (!Helper.elementExists(modal) && !Helper.elementExists(btn)) {
        throw new Error('not found modal or openBtn')
        return
    }

    btn.addEventListener('click', (e) => {
        toggleModal(modal, true, callback)

        modal.addEventListener('click', (e) => e.stopPropagation());

        modalsWrap.addEventListener('click', (e) => {
            toggleModal(modal, false, callback)
        });
        
        window.addEventListener('keyup', (e) => {
            if ((e.which || e.keyCode) == 27) {
                toggleModal(modal, false, callback)
            }
        });
        
    });
}

function toggleModal(currentModal, opened = false, callback = null){
    const modalClassName = "modal--active";

    if (opened) {
        modalsWrap.classList.add(modalClassName)
        currentModal.classList.add(modalClassName);
        if(callback) callback()
    }
    else {
        modalsWrap.classList.remove(modalClassName)
        currentModal.classList.remove(modalClassName);
        if (callback) callback()
    }

}