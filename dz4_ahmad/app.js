document.addEventListener('DOMContentLoaded', function() {
    const trackingBox = document.getElementById('trackingBox');
    const coordinatesDisplay = document.getElementById('coordinates');

    function updateCoordinates(event) {
      const rect = trackingBox.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      coordinatesDisplay.textContent = `A: ${Math.round(x)}, B: ${Math.round(y)}`;
    }

    trackingBox.addEventListener('mousemove', updateCoordinates);
  });