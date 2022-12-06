const navigationToggle = document.querySelector('.nav-burger-menu-toggle');
const navSideBar = document.querySelector('.nav-side-bar');
const navInnerSideBar = document.querySelector('.nav-side-bar-inner');
const cartNav = document.querySelector("#cart");

const addToCartButtons = document.querySelectorAll('#addToCart');

let cartCount = 0;

function onLoad(){
    cartCount = localStorage.getItem('cart');
    if(cartCount){
        document.getElementById('cartTotal').innerHTML = cartCount;
    }

    if(addToCartButtons) {
        addToCartButtons.forEach(addToCart => {
            addToCart.addEventListener('click', ()=> {
                cartCount++;
                document.getElementById('cartTotal').innerHTML = cartCount;
                localStorage.setItem('cart', cartCount);
            });
        });
       
    }
}

// Clear cart
cartNav.addEventListener('click', ()=> {
    cartCount = 0;
    document.getElementById('cartTotal').innerHTML = cartCount;
    localStorage.setItem('cart', cartCount);
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