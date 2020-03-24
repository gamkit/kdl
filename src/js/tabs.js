import Helper from './helper';
 

const tabsList = document.querySelectorAll('.tabs');

[...tabsList].forEach((tabs) => {
    tabs.addEventListener('click', function (e) {
        let currentTab = e.target;

        if (currentTab.classList.contains('tab-item')) {
            if(Helper.elementExists(currentTab)) {}
            let tabItems = tabs.querySelectorAll('.tab-item');
            let tabContentItems = tabs.querySelectorAll('.tab-content-item');

            [...tabItems].forEach((tabItem) => tabItem.classList.remove('tab-item--active'));
            [...tabContentItems].forEach((tabContentItem) => {
                tabContentItem.classList.remove('tab-content-item--active');
                if(currentTab.dataset.tabIndex === tabContentItem.dataset.tabIndex) {
                    tabContentItem.classList.add('tab-content-item--active');
                }
            });
            
            currentTab.classList.add('tab-item--active');
            
            
        }
    });
})
