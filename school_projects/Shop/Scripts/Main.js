
const navigationToggle = document.querySelector('.nav-burger-menu-toggle');
const navSideBar = document.querySelector('.nav-side-bar-darken');
const navInnerSideBar = document.querySelector('.nav-side-bar-inner');
const cartNavs = document.querySelectorAll("#cart");

const cartsTotal = document.querySelectorAll('#cartTotal');

// const addToCartButtons = document.querySelectorAll('#addToCart');

var cartItems = new Array();
// export {cartCount} ;

function onLoad(){
    var cartItemsTemp = localStorage.getItem('cartItems');
    if(cartItemsTemp && cartItemsTemp.length > 0){
        cartItems = JSON.parse(cartItemsTemp);

        cartsTotal.forEach(cartTotal => {
            cartTotal.innerHTML = cartItems.length;
        });
    }
}

// Clear cart
cartNavs.forEach(cartNav=>{
    cartNav.addEventListener('click', ()=> {
        cartItems = [];
        cartsTotal.forEach(cartTotal => {
            cartTotal.innerHTML = cartItems.length;
        });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    });
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