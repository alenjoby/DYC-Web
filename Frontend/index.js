document.getElementById('enquiry-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent page reload
  
    const formData = new FormData(this); // Capture form data
    const data = Object.fromEntries(formData.entries()); // Convert to JSON
  
    try {
      const response = await fetch('http://localhost:4000/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send data as JSON
      });
  
      const result = await response.json();
  
      if (response.ok) {
        document.getElementById('response-message').innerText = result.message;
        this.reset(); 
      } else {
        document.getElementById('response-message').innerText = result.error || 'An error occurred.';
      }
    } catch (error) {
      document.getElementById('response-message').innerText = 'Failed to connect to the server.';
      console.error(error);
    }
  });
  