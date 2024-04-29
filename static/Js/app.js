$(document).ready(function() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const captureButton = document.getElementById('captureButton');

    let mediaStream;

    // Start camera
    document.getElementById('startButton').addEventListener('click', async function() {
        try {
            mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = mediaStream;
        } catch (err) {
            console.error('Error accessing camera:', err);
        }
    });

    // Capture image
    captureButton.addEventListener('click', function() {
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png');

        // Send captured image to Flask backend
        $.ajax({
            type: 'POST',
            url: '/process_image',
            data: { image_data: imageData },
            success: function(response) {
                console.log('Response from backend:', response);
            },
            error: function(xhr, status, error) {
                console.error('Error sending image to backend:', error);
            }
        });
    });
});
