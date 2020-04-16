import Helper from '../helper';

const modalsWrap = document.querySelector('.modals__wrap');
// Declare modals here
declareModal('.modal-menu', '.header__btn-hamburger');

// 
function declareModal(modalName, modalOpenBtn, callback = null){
    
    let btn = document.querySelector(modalOpenBtn);
    let modal = null, closeBtn = null;

    if(Helper.elementExists(modalsWrap)) {
        modal =  modalsWrap.querySelector(modalName);
    }

    closeBtn = modal.querySelector('.modal-menu__btn-close')

    if (!Helper.elementExists(modal) && !Helper.elementExists(btn)) {
        throw new Error('not found modal or openBtn')
        return
    }

    if(Helper.elementExists(closeBtn)) {
        closeBtn.addEventListener('click', (e) => {
            toggleModal(modal, false, callback)
        })
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


function toggleModal(currentModal, isOpened = false, callback = null){
    const modalClassName = "modal--active";

    if (isOpened) {
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




!function initReportModals() {

    let reports = [...document.querySelectorAll(".financial-reports-years__item")];
    let modal = document.querySelector('.financial-reports-months__wrap');
    let closeBtn = document.querySelector('.btn-close.financial-reports-months__btn-close');
    let loadingSpinner = document.querySelector('.financial-reports-months__icon-spinner');

    if(!Helper.elementExists(modal)) {
        return
    }

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('financial-reports-months--active');

    });

    window.addEventListener('keyup', (e) => {
        if ((e.which || e.keyCode) == 27) {
            modal.classList.remove('financial-reports-months--active');
        }
    });

    reports.forEach(item => {
        item.addEventListener('click', (e) => {
            loadingSpinner.classList.add('icon-spinner--active');
            if(item.dataset.reportYear !== '') {
                modal.classList.add('financial-reports-months--active');
            }
        })
    })
}();