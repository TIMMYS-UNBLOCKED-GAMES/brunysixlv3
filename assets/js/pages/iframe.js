function goFullscreen() {
        const iframe = document.getElementById('myIframe');
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { 
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { 
            iframe.msRequestFullscreen();
        }
    }

    function refreshIframe() {
        const iframe = document.getElementById('myIframe');
        iframe.src = iframe.src;
    }

    function checkForHacks() {
        alert('No hacks available');
    }
