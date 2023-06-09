
'use string'

window.addEventListener('load', windowLoad);

function windowLoad() {

    document.body.classList.add('loaded');
    if (document.querySelector('.main-slider')) {
        new Swiper('.main-slider', {
            speed: 2000,
            effect: 'fade',
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.bullets__items',
                type: 'bullets',
                clickable: true
            },
        });
    }

    document.addEventListener('click', documentActions);

    function documentActions(event) {
        const targetElem = event.target;
        if (targetElem.closest('.nav-popular__item')) {
            const tabNavItem = targetElem.closest('.nav-popular__item');
            if (!tabNavItem.classList.contains('active')) {
                const activeTabNavItem = document.querySelector('.nav-popular__item.active')
                activeTabNavItem.classList.remove('active')
                tabNavItem.classList.add('active');

                const tabItem = document.querySelectorAll('.popular__tab');
                const activeTabItem = document.querySelector('.popular__tab.active');

                activeTabItem.classList.remove('active');
                tabItem[getIndex(tabNavItem)].classList.add('active');
            }
        }
    }
    function getIndex(element) {
        return Array.from(element.parentNode.children).indexOf(element);
    }
}
