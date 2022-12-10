const navigationToggle = document.querySelector('.nav-burger-menu-toggle');
const navSideBar = document.querySelector('.nav-side-bar-darken');
const navInnerSideBar = document.querySelector('.nav-side-bar-inner');
const navigationBar = document.getElementById('navbar');
var cartNavs = null;
var cartsTotal = null;

var navigationMenus = [
    {name: "Home", path: "Home.html"},
    {name: "Products", path: "Products.html"},
    {name: "News", path: "News.html"},
    {name: "Contact", path: "Contact.html"},
    {name: "About", path: "About.html"}
];

var cartItems = new Array();

function onLoad(){
    var navigationDropdown = document.querySelector('.navigation-menu-dropdown');

    var dropdownItems ="";
    var currentBody = document.body;
    var currentPage = currentBody.getAttribute('current-page');
    var currentPageDisplay = document.getElementById('current-page');
    currentPageDisplay.innerHTML = currentPage;

    navigationMenus.forEach(navMenu =>{
        if(currentPage == navMenu.name){
            dropdownItems += `<li><a class="dropdown-item active">${navMenu.name}</a></li>`;
            return;
        }

        dropdownItems += `<li><a class="dropdown-item" href="${navMenu.path}">${navMenu.name}</a></li>`;
    });

    var navigationMenuItems = "";
    navigationMenus.reverse().forEach(navMenu =>{
        if(currentPage == navMenu.name){
            navigationMenuItems += `<a class="nav-a active">${navMenu.name}</a>`;
            return;
        }
        navigationMenuItems += `<a class="nav-a" href="${navMenu.path}">${navMenu.name}</a>`;
    });

    navigationBar.innerHTML += navigationMenuItems;
    navigationDropdown.innerHTML += dropdownItems;

    cartNavs = document.querySelectorAll("#cart");
    cartsTotal = document.querySelectorAll('#cartTotal');

    var cartItemsTemp = localStorage.getItem('cartItems');

    if(cartItemsTemp && cartItemsTemp.length > 0){
        cartItems = JSON.parse(cartItemsTemp);
            cartsTotal.forEach(cartTotal => {
            cartTotal.innerHTML = cartItems.length;
        });
    }

    cartNavs.forEach(cartNav=>{
        cartNav.addEventListener('click', ()=> {
            console.log("cart cleared");
            cartItems = [];
            cartsTotal.forEach(cartTotal => cartTotal.innerHTML = cartItems.length);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        });
    });
}

navSideBar.addEventListener('click', ()=> {
    setMainNavVisibility(false);
});

navigationToggle.addEventListener('click', ()=> {
    const visibility = navSideBar.getAttribute('side-bar-visible');
    
    if(visibility == "false" || !visibility){
        setMainNavVisibility(true);
    } else{
        setMainNavVisibility(false);
    }
});

function setMainNavVisibility(visible)
{
    navInnerSideBar.setAttribute("side-bar-visible", visible);
    navSideBar.setAttribute("side-bar-visible", visible);
    navigationToggle.setAttribute("aria-expanded", visible);
}