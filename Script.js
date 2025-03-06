function openModal(id) {
    document.getElementById("modal-" + id).style.display = "block";
}

function closeModal(id) {
    document.getElementById("modal-" + id).style.display = "none";
}

function toggleMenu() {
    var menu = document.querySelector(".navbar-menu");
    menu.classList.toggle("active");
}
