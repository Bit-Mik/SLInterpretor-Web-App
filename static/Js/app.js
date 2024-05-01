$(document).ready(function() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let mediaStream;

    // Start camera
    document.getElementById('startButton').addEventListener('click', async function() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                mediaStream = stream;
                video.srcObject = stream;
            })
            .catch(function(err) {
                console.error('Error accessing camera:', err);
            });
        
            // Continuously capture frames and send them to backend
            setInterval(function() {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = canvas.toDataURL('image/jpeg');
            
                // Send captured frame to Flask backend
                $.ajax({
                    type: 'POST',
                    url: '/process_frame',
                    data: { frame_data: imageData },
                    success: function(response) {
                        console.log('Response from backend:', response);
                    },
                    error: function(xhr, status, error) {
                        console.error('Error sending frame to backend:', error);
                    }
                });
            }, 1); // Adjust the interval as needed;
    });

});
