// Mobile menu navigation border removal
if (window.screen.width <= 1130) {
    function removeall() {
        $(".cir_border").css("border", "none");
    }
    $("#sec").on("click", function () {
        removeall();
        $("#sec").css("border", "2px solid whitesmoke");
        $("#sec").css("border-radius", "20px");
    });
    $("#pri").on("click", function () {
        removeall();
        $("#pri").css("border", "2px solid whitesmoke");
        $("#pri").css("border-radius", "20px");
    });
    $("#tri").on("click", function () {
        removeall();
        $("#tri").css("border", "2px solid whitesmoke");
        $("#tri").css("border-radius", "20px");
    });
    $("#quad").on("click", function () {
        removeall();
        $("#quad").css("border", "2px solid whitesmoke");
        $("#quad").css("border-radius", "20px");
    });
    $("#quint").on("click", function () {
        removeall();
        $("#quint").css("border", "2px solid whitesmoke");
        $("#quint").css("border-radius", "20px");
    });
    $("#hept").on("click", function () {
        removeall();
        $("#hept").css("border", "2px solid whitesmoke");
        $("#hept").css("border-radius", "20px");
    });
}

// Light/Dark Mode Toggle
const checkbox = document.getElementById("checkbox");

function checkDarkMode() {
    if (
        localStorage.getItem("tourism_website_darkmode") !== null &&
        localStorage.getItem("tourism_website_darkmode") === "true"
    ) {
        document.body.classList.add("dark");
        if (checkbox) checkbox.checked = true;
    } else {
        document.body.classList.remove("dark");
        if (checkbox) checkbox.checked = false;
    }
}
checkDarkMode();

if (checkbox) {
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
        document.body.classList.contains("dark")
            ? localStorage.setItem("tourism_website_darkmode", true)
            : localStorage.setItem("tourism_website_darkmode", false);
    });
}

// Scroll to Top Button
let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (mybutton) {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Update Navbar Active State While Scrolling
function updateNav() {
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".nav-links li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (window.screen.width <= 425) {
            if (rect.top <= 1300 && rect.bottom >= 100) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                if (navLinks[index]) navLinks[index].classList.add("active");
            }
        } else if (425 <= window.screen.width <= 768) {
            if (rect.top <= 1250 && rect.bottom >= 100) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                if (navLinks[index]) navLinks[index].classList.add("active");
            }
        } else {
            if (rect.top <= 1000 && rect.bottom >= 100) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                if (navLinks[index]) navLinks[index].classList.add("active");
            }
        }
    });
}

window.addEventListener("scroll", updateNav);

// About section hover effect
$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

function introAboutLogoTransition() {
    // Carousel animation enhancement
    $(".cards label").css("transition", "all 0.5s ease");
}

// Form submission handler
$(".cform").on("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! Our adventure team will get back to you soon.");
    this.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
