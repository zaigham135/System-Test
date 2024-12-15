// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Support Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    const callbackBtn = document.getElementById('callbackBtn');
    
    if (callbackBtn) {
        callbackBtn.addEventListener('click', function() {
            // Here you can implement the callback request functionality
            // For example, showing a modal or form
            alert('Callback request feature will be implemented here');
        });
    }

    // Add smooth hover effect to contact links
    const contactLinks = document.querySelectorAll('.support__contact');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});


  document.querySelectorAll('.smooth-scroll').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        window.addEventListener("load", function() {
            document.querySelector(".content").style.display = "block";
        });
        // window.onload = function () {
        //     window.location.hash = "section1";
        // };



        