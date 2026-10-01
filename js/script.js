// =========================================
// TOAST DE FEEDBACK
// =========================================

const toastButton = document.getElementById("toastButton");
const toast = document.getElementById("toast");

if (toastButton && toast) {

    toastButton.addEventListener("click", function () {

        toast.classList.add("show");
        toast.setAttribute("aria-hidden", "false");

        setTimeout(function () {
            toast.classList.remove("show");
            toast.setAttribute("aria-hidden", "true");
        }, 3000);

    });

}


// =========================================
// MENU HAMBÚRGUER
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("mainMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        const menuAberto = navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            menuAberto
        );

    });

}