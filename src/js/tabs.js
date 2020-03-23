const tabs = document.querySelectorAll('.tabs');
[...tabs].forEach((item) => {
    item.addEventListener('click', function (e) {
        let target = e.target;
        if (target.classList.contains('tab-item')) {
            
        }
    });
})
