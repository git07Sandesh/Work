document.addEventListener("DOMContentLoaded", function() {
    const darkModeVideo = document.getElementById('darkModeVideo');
    const lightModeVideo = document.getElementById('lightModeVideo');

    // Set the correct paths or URLs for your video files
    darkModeVideo.src = 'file:///Users/sandeshbhattarai/Downloads/Black%20Clouds%20Spooky%20Halloween%20Zoom%20Virtual%20Background.mp4';
    lightModeVideo.src = 'file:///Users/sandeshbhattarai/Downloads/End-of-Life%20Tribute%20Video%20in%20Sky%20Blue%20White%20Elegant%20Photocentric%20Style.mp4';
    document.getElementById('modeSwitch').addEventListener('click', function() {
        if (darkModeVideo.style.display === 'none') {
            darkModeVideo.style.display = 'block';
            lightModeVideo.style.display = 'none';
            this.textContent = 'Switch to Dark Mode';
        } else {
            darkModeVideo.style.display = 'none';
            lightModeVideo.style.display = 'block';
            this.textContent = 'Switch to Light Mode';
        }
    });
    
});