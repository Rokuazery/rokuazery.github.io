const navigationToggle = document.querySelector('.nav-burger-menu-toggle');
const navSideBar = document.querySelector('.nav-side-bar');

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

navigationToggle.addEventListener('click', ()=> {
    const visibility = navSideBar.getAttribute('side-bar-visible');

    if(visibility == "false") {
        setMainNavVisibility(true);
    } else{
        setMainNavVisibility(false);
    }
});

function setMainNavVisibility(visible)
{
    navSideBar.setAttribute("side-bar-visible", visible);
    navigationToggle.setAttribute("aria-expanded", visible);
}