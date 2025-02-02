document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (you can replace this with an actual API call)
    setTimeout(() => {
        document.getElementById('responseMessage').innerText = `Thank you, ${name}! Your message has been sent.`;
        document.getElementById('contactForm').reset(); // Clear the form
    }, 1000);
});