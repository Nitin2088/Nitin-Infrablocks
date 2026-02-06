// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form Submission Handling (for contact.html)
const form = document.getElementById('enquiry-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                form.style.display = 'none';
                document.querySelector('.success-message').style.display = 'block';
            } else {
                alert('There was an error submitting your enquiry. Please try again.');
            }
        })
        .catch(error => {
            alert('There was an error submitting your enquiry. Please try again.');
        });
    });
}
