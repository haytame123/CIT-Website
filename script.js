const buttons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        pages.forEach(page => page.classList.remove("active"));
        buttons.forEach(btn => btn.classList.remove("active"));

        document.getElementById(button.dataset.page).classList.add("active");
        button.classList.add("active");
    });
});

const form = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;

    if(!emailPattern.test(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Email invalide.";
        return;
    }

    if(!phonePattern.test(phone)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Numéro invalide (10 chiffres).";
        return;
    }

    formMessage.style.color = "lightgreen";
    formMessage.textContent = "Inscription envoyée avec succès !";
    form.reset();
});
