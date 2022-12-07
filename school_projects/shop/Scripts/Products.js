// file ini merupakan salah satu scripts atau codebehind khusus untuk products.html

// variabel products yang berisi semua data barang yang dijual. Di dalam products variabel ini terdapat:
// id(identification) atau bisa dibilang sebagai nomor 'unik'(tidak boleh ada duplikasi) produk(berperan sangat penting untuk mengindeks/mengindex produk)
// name atau nama berupa nama produk barang yang kita jual
// price atau harga berupa harga produk barang yang kita jual
// image atau gambar yang merupakan link menuju gambar produk yang kita jual
// semua variabel yang saya jelaskan diatas itu terdapat di dalam 'products' array yang merupakan satuan dari array tersebut

var products = [
     {id: 1, name:"Falcon - Black & Grey", price: 355000, image:"https://cdn.discordapp.com/attachments/915998729104932887/1049320944436531252/61c62dd94238ccd4a30bfc7063d3a9b6.jpg"},
     {id: 2, name:"Prodigy Alpha - Blue", price: 789000, image:"https://cdn.discordapp.com/attachments/915998729104932887/1049321389758349382/78157cbac564b54794ef2b614a3b526e.jpg"},
     {id: 3, name:"Parabellum VC - Black & White", price: 396000, image:"https://cdn.discordapp.com/attachments/915998729104932887/1049321981742424064/e894ef31838d50bc283f0e34badb7606.jpg"},
     {id: 4, name:"Geostorm Alpha - Black & Red", price: 595000, image:"https://cdn.discordapp.com/attachments/915998729104932887/1049321185546088479/41257a19c99fccdb022bad9af3440e77.jpg"},
     {id: 5, name:"Jojo JR - Black & White", price: 358000, image:"https://cdn.discordapp.com/attachments/915998729104932887/1049322197522579466/ebc198546a2bd6204e8d310343681501.jpg"},

     {id: 6, name:"Brittany Alpha - Black & Pink", price: 369000, image:"https://cdn.discordapp.com/attachments/915998729104932887/1049318613137510431/aa1f7a82034a7d8056d1f95ae94fb4f9.jpg"},
     {id: 7, name:"Moonage - Black", price: 495000, image:"https://cdn.discordapp.com/attachments/915998729104932887/1049319810678407199/eb691a5041f0ac17f72ca1a2a0609eb5.jpg"},
     {id: 8, name:"Vesper - Black & Grey", price: 596000, image:"https://cdn.discordapp.com/attachments/915998729104932887/1049320133161652284/sg-11134201-22100-u3iwe0euzviv8a.jpg"},
     {id: 9, name:"Geostorm Alpha - Black & Red", price: 595000, image:"https://cdn.discordapp.com/attachments/915998729104932887/1049321185546088479/41257a19c99fccdb022bad9af3440e77.jpg"},
     {id: 10, name:"Jojo JR - Black & White", price: 358000, image:"https://cdn.discordapp.com/attachments/915998729104932887/1049322197522579466/ebc198546a2bd6204e8d310343681501.jpg"}];

// var interSectionObserver = new IntersectionObserver();

// currency/mata uang untuk harga yang kita cantumkan
// contoh: Rp299.000.00
var currency = "Rp";

// event listener 'DOMContentLoaded' adalah event function yang di jalankan saat semua products.html sudah selesai memuat
document.addEventListener('DOMContentLoaded', function() {
    // memanggil function 'insertProducts()'
    insertProducts();

    // memilih semua button yang ber id 'addToChar'. symbol '#' mengindikasikan id dalam html attribute tersebut
    const addToCartButtons = document.querySelectorAll('#addToCart');

    // mengindeks semua 'addToCartButtons' untuk dijadikan satuan yang akan di pegang oleh variabel 'addToCart'
    addToCartButtons.forEach(addToCart => {
        // menambahkan event listener 'click'(saat di click) kepada addToCart secara satu-persatu untuk setiap tombol 'addToCart'
        addToCart.addEventListener('click', ()=> {

            // id ini merupakan variabel yang tercantum di dalam variabel array yang bernama 'products'
            // mendapatkan attribute 'productId' dari 'addToCart'
            var id = addToCart.getAttribute('productId');

            // mencari produk id yang sama denga produk id yang tercantum di 'productTag'(var id) attribute yang terdapat di addToCart
            var product = products.find(p => p.id == id);

            // menambahkan 'product' variabel kedalam cartItems dengan funcrtion 'push()'
            cartItems.push(product);

            // mengupdate 'cartTotal' yang merupakan jumlah dari barang yang kita masukan ke cart atau keranjang
            cartsTotal.forEach(cartTotal => {
                cartTotal.innerHTML = cartItems.length;
            });
            // document.getElementById('cartTotal').innerHTML = cartItems.length;
            // menyimpan data 'cartItems' untuk menyimpan barang-barang yang ada di cart atau keranjang
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        });
    });
 }, false);

 // function 'insertProducts()' ini untuk memasukan data yang ada di array 'products' kedalam container atau kontener 'products'
function insertProducts() {
    // mendapatkan container atau kontener products yang terdapat di products.html
    var container = document.getElementById("products");

    // deklarasi variable 'card' untuk menyimpan tampilan 'card' produk-produk
    var card = "";

    // mengindeks semua 'products' untuk dijadikan satuan yang akan di pegang oleh variabel 'product' 
    products.forEach(product => {
        // mengubah format product.price
        // contoh: dari 299000 jadi 299.000

        var randomDiscount = getRandomFloat(0.0, 0.3, 1);
        var discountedprice = numberWithCommas(product.price - (product.price * randomDiscount));
        product.price = numberWithCommas(product.price);

        var priceTag = "";
        if(randomDiscount > 0.0) {
            priceTag = `<p class="card-text text-white-50"><s>${currency}${product.price}.00</s> <span style='color: crimson; font-weight: 600;'>&nbsp; -</span> <span style='color: lightgreen; font-weight: 600;'>${randomDiscount * 100}%</span></p>
            <p class="card-text">${currency}${discountedprice}.00</p>`;
        }
        else{
            priceTag = `<br><p class="card-text">${currency}${product.price}.00</p>`;
        }

        // kode html card dan proses dimana kita cantumkan variabel-variabel dari object 'products' ke kode html
        card +=`
        <div class="pb-5 h-100">
        <div class="card bg-gradient-light show h-100" style="width: 20rem;">
        <img src="${product.image}" class="card-img-top rounded-1" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
            ${priceTag}
          <hr>
          <a productId="${product.id}" class="btn btn-primary btn-center" id="addToCart">Add to Cart!</a>
          <a productId="${product.id}" class="btn btn-secondary btn-center" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="viewDetails">Details</a>
        </div>
      </div>
      </div>`;


    });
    
    container.innerHTML += card;
    // menambahkan semua card produk-produk ke dalam 'container'(products kontener)

}

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

// Untuk menambahkan titik di angka
// Contoh dari 299000 jadi 299.000
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}