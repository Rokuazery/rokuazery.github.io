
const navigationToggle = document.querySelector('.nav-burger-menu-toggle');
const navSideBar = document.querySelector('.nav-side-bar-darken');
const navInnerSideBar = document.querySelector('.nav-side-bar-inner');
const cartNav = document.querySelector("#cart");

// const addToCartButtons = document.querySelectorAll('#addToCart');

var cartItems = new Array();
// export {cartCount} ;

function onLoad(){
    var cartItemsTemp = localStorage.getItem('cartItems');
    if(cartItemsTemp && cartItemsTemp.length > 0){
        cartItems = JSON.parse(cartItemsTemp);
        document.getElementById('cartTotal').innerHTML = cartItems.length;
    }
}

// Clear cart
cartNav.addEventListener('click', ()=> {
    cartItems = [];
    document.getElementById('cartTotal').innerHTML = cartItems.length;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
});

navSideBar.addEventListener('click', ()=> {
    setMainNavVisibility(false);
});

navigationToggle.addEventListener('click', ()=> {
    const visibility = navSideBar.getAttribute('side-bar-visible');

    // if(isFirstTime) {
    //     navInnerSideBar.setAttribute("side-bar-visible", )
    //     isFirstTime = true;
    // }

    if(visibility == "false" || !visibility) {
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