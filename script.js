// NAV FUNCTIONS
 // Function to remove 'active' class from all links except 'Home'
 function removeActiveFromLinks() {
    document.querySelectorAll('.nav-link:not(#homeLink)').forEach(link => {
        link.classList.remove('active');
    });
}

// Handle initial active state for 'Home'
removeActiveFromLinks();

// Intersection Observer to handle the 'active' state when scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get the corresponding navigation link and handle 'active' state
            const targetLinkId = entry.target.getAttribute('id') + 'Link';

            if (targetLinkId !== 'homeLink') {
                removeActiveFromLinks();
                document.getElementById(targetLinkId).classList.add('active');
            }
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Hide the navigation bar when scrolling down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbarNav").style.top = "0";
    } else {
        document.getElementById("navbarNav").style.top = "-50px"; // Adjust the value as needed
    }
    prevScrollpos = currentScrollPos;
};