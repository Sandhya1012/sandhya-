// Handle order completion
document.getElementById('completeOrder').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        // Show order success message
        const message = document.getElementById('orderMessage');
        message.style.display = 'block';
        message.innerHTML = "Your order has been successfully completed! You will be redirected shortly...";

        // Redirect after a delay (3 seconds)
        setTimeout(function() {
            window.location.href = 'index.html';  // Redirect to home page (can be previous page as needed)
        }, 3000);
    } else {
        alert('Please fill out all fields!');
    }
});
