document.addEventListener('DOMContentLoaded', function() {
    const oceanContainer = document.getElementById('ocean-scroll-container');
    if (oceanContainer) {
        oceanContainer.addEventListener('scroll', function() {
            let maxScroll = oceanContainer.scrollHeight - oceanContainer.clientHeight;
            let scrollPosition = oceanContainer.scrollTop;
            let depth = Math.floor((scrollPosition / maxScroll) * 1500);
            if (depth > 1500) { depth = 1500; }
            if (depth < 0) { depth = 0; }
            document.getElementById('depth-display').innerText = "Depth: " + depth + "m";
        });
    }

    const canvas = document.getElementById('data-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = '#061122'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#FFC300'; 
        ctx.font = 'bold 18px Arial';
        ctx.fillText('Scanner Data Analysis', 100, 30);
        
        ctx.strokeStyle = '#ffffff'; 
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, 50);   
        ctx.lineTo(50, 200);  
        ctx.lineTo(350, 200); 
        ctx.stroke();         
        
        ctx.fillStyle = '#2e8b57'; 
        ctx.fillRect(80, 80, 50, 120); 
        ctx.fillStyle = '#ffffff';
        ctx.font = '14px Arial';
        ctx.fillText('Flora', 88, 220); 
        
        ctx.fillStyle = '#00d4ff'; 
        ctx.fillRect(160, 40, 50, 160);
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Fauna', 165, 220);
        
        ctx.fillStyle = '#FF3333'; 
        ctx.fillRect(240, 130, 50, 70);
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Tech', 248, 220);
    }
});