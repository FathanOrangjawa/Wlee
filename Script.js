function order(paket, harga) {
    var nomor = "6285293393972"; // Ganti dengan nomor WA lu
    var pesan = `Halo, saya ingin memesan paket ${paket}.\nDetail: ${harga}`;
    var link = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
    window.open(link, "_blank");
}