const pImage = document.getElementById("pImage");
const pTitle = document.getElementById("pTitle");
const pPrice = document.getElementById("pPrice");
const pDescription = document.getElementById("pDescription");
const recommendContainer = document.getElementById("recommendContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const produks = {

    1:{
        pImage:"../gambar/Coming.jpg",
        pTitle:"Mouse Gaming RGB",
        pPrice:"Rp700.000",
        pDescription:"Mouse gaming RGB dengan sensor 7200 DPI."
    },

    2:{
        pImage:"../gambar/InikahMy.jpeg",
        pTitle:"Keyboard Blub Blub",
        pPrice:"Rp350.000",
        pDescription:"Keyboard mechanical blue switch."
    },

    3:{
        pImage:"../gambar/testing.jpg",
        pTitle:"Headset Apple",
        pPrice:"Rp250.000",
        pDescription:"Headset dengan suara surround."
    },

    4:{
        pImage:"../gambar/NOVEL2.jpeg",
        pTitle:"Headset Apple",
        pPrice:"Rp250.000",
        pDescription:"Headset dengan suara surround."
    },

    5:{
        pImage:"../gambar/InikahMy2.jpeg",
        pTitle:"Headset Apple",
        pPrice:"Rp250.000",
        pDescription:"Headset dengan suara surround."
    },

    6:{
        pImage:"../gambar/NOVEL1c5.jpeg",
        pTitle:"Headset Apple",
        pPrice:"Rp250.000",
        pDescription:"Headset dengan suara surround."
    }

};
const produk = produks[id];
function updateProduct(){

    pImage.src = produk.pImage;
    pTitle.innerText = produk.pTitle;
    pPrice.innerText = produk.pPrice;
    pDescription.innerText = produk.pDescription;

}

const keys = Object.keys(produks)
    .filter(key => key != id) // Hilangkan produk yang sedang dibuka
    .sort(() => Math.random() - 0.5); // Acak urutannya

let jumlah = 0;

for (const key of keys) {

    const item = produks[key];

    recommendContainer.innerHTML += `
        <div class="card recommend-card">

            <a href="product.html?id=${key}">

                <img class="card-image" src="${item.pImage}">

                <h3>${item.pTitle}</h3>

                <p>${item.pPrice}</p>

            </a>

        </div>
    `;

    jumlah++;

    if (jumlah >= 10) break;

}

updateProduct();