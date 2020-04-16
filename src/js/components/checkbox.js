import Helper from '../helper';

const checkboxList = document.querySelectorAll('.field-checkbox');

[...checkboxList].forEach(checkbox => {
    checkbox.addEventListener('click', (e)=> {
        let target = e.target;
        if(target.tagName === "INPUT") {
            if (target.checked) {
                checkbox.classList.add('field-checkbox--checked')
            }
            else {
                checkbox.classList.remove('field-checkbox--checked')
            }
        }
    });
});

[...checkboxList].forEach(item => {
    if(item.querySelector('input[type="checkbox"]').checked) {item.classList.add('field-checkbox--checked');}
    else {item.classList.remove('field-checkbox--checked');}
})