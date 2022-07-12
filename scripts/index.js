const dropDownBtn = document.querySelector(".dropbtn");
const dropDown = document.querySelector(".dropdown-content");

const pages = document.querySelectorAll(".page");
const navs = document.querySelectorAll(".nav-a");

var activePage = "page-home";

dropDownBtn.addEventListener("mouseleave", () =>{
    dropDown.setAttribute("closing", "");

    dropDown.addEventListener("animationend", () =>{
        dropDown.removeAttribute("closing");
        dropDown.setAttribute("close", "");
    }, {once: true});
});

navs.forEach((nav) => {
    nav.addEventListener("click", ()=> {
        if(activePage != nav.id)
        {
            resetPageAttribute();

            pages.forEach((page) => {
                if(page.id == nav.id)
                {
                    activePage = page.id;
                    page.setAttribute("page-active", "");
                    document.title = "Rokuazery: ".concat(nav.textContent);
                }
            });
        }
    });
});

function resetPageAttribute()
{
    pages.forEach((page) => {
        if (activePage == page.id) {
            page.removeAttribute("page-active", "");
            page.setAttribute("page-closing", "");

            page.addEventListener("animationend", () => {
                page.removeAttribute("page-closing");
            }, {once: true});
        }
    });
}