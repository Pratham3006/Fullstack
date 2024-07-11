document.getElementById('inventoryForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
        const response = await fetch('http://localhost:8000/item', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Data saved:', data);
            // Update UI or show success message
        } else {
            console.error('Failed to save data');
            // Handle error scenario
        }
    } catch (error) {
        console.error('Failed to connect to server:', error);
        // Handle network errors
    }
});
