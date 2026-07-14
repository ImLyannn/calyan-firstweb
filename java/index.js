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

}