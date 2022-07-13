const dropDownBtn = document.querySelector('.dropbtn');
const dropDown = document.querySelector('.dropdown-content');

const mainNav = document.querySelector('.navbar');
const navToggle = document.querySelector('.mobile-nav-toggle');

const pages = document.querySelectorAll('.page');
const navs = document.querySelectorAll('.nav-a');

var activePage = 'page-home';

navToggle.addEventListener('click', ()=> {
    const visibility = mainNav.getAttribute('data-visible');

    if(visibility == "false") {
        setMainNavVisibility(true);
    } else {
        setMainNavVisibility(false);
    }
});


dropDownBtn.addEventListener('mouseleave', () =>{ closeDropDown(); });
dropDown.addEventListener('click', () =>{ closeDropDown(); console.log('HE'); });

function closeDropDown()
{
    dropDown.setAttribute('closing', '');
    dropDown.addEventListener('animationend', () =>{
        dropDown.removeAttribute('closing');
        dropDown.setAttribute('close', '');
    }, {once: true});
}

navs.forEach((nav) => {
    nav.addEventListener('click', ()=> {
        setMainNavVisibility(false);
        if(activePage != nav.id)
        {
            resetPageAttribute();

            pages.forEach((page) => {
                if(page.id === nav.id) {
                    activePage = page.id;
                    page.setAttribute('page-active', '');
                    document.title = 'Rokuazery: '.concat(nav.textContent);
                }
            });
        }
    });
});

function setMainNavVisibility(visible)
{
    mainNav.setAttribute("data-visible", visible);
    navToggle.setAttribute("aria-expanded", visible);
}

function resetPageAttribute()
{
    pages.forEach((page) => {
        if (activePage === page.id) {
            page.removeAttribute('page-active', '');
            page.setAttribute('page-closing', '');

            page.addEventListener('animationend', () => {
                page.removeAttribute('page-closing');
            }, {once: true});
        }
    });
}