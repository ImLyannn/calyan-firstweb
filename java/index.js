const jamBuka = document.getElementById("jamBuka");

if (jamBuka) {

    const sekarang = new Date();
    const jam = sekarang.getHours();

    if (jam >= 8 && jam < 17) {

        jamBuka.innerHTML = `
            08:00 - 17:00
            <span style="color:green;">● Buka</span>
        `;

    } else {

        jamBuka.innerHTML = `
            08:00 - 17:00
            <span style="color:red;">● Tutup</span>
        `;

    }

};

const productContainer = document.getElementById("productContainer");

const produks = {

    1:{
        pImage:"gambar/Coming.jpg",
        pTitle:"Mouse Gaming RGB",
        pPrice:"Rp700.000"
    },

    2:{
        pImage:"gambar/InikahMy.jpeg",
        pTitle:"Keyboard",
        pPrice:"Rp350.000"
    },

    3:{
        pImage:"gambar/testing.jpg",
        pTitle:"Headset",
        pPrice:"Rp250.000"
    },

    4:{
        pImage:"gambar/NOVEL2.jpeg",
        pTitle:"Speaker",
        pPrice:"Rp150.000"
    },

    5:{
        pImage:"gambar/InikahMy2.jpeg",
        pTitle:"Mousepad",
        pPrice:"Rp90.000"
    },

    6:{
        pImage:"gambar/NOVEL1c5.jpeg",
        pTitle:"Monitor",
        pPrice:"Rp2.000.000"
    }

};

const keys = Object.keys(produks);

keys.sort(() => Math.random() - 0.5);

for(const key of keys){

    const item = produks[key];

    productContainer.innerHTML += `

        <div class="card recommend-card">

            <a href="html/product.html?id=${key}">

                <img class="card-image" src="${item.pImage}">

                <h3>${item.pTitle}</h3>

                <p>${item.pPrice}</p>

            </a>

        </div>

    `;

}