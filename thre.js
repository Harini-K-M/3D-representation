document.addEventListener('DOMContentLoaded', function () {
    setInterval(function() {
        fetch('/data').then(response => response.json()).then(data => {
            document.getElementById('sensorData').innerHTML = 'Acceleration: ' +
                'X: ' + data.acceleration.x + ' Y: ' + data.acceleration.y + ' Z: ' + data.acceleration.z +
                '<br>Gyroscope: ' + 'X: ' + data.gyroscope.x + ' Y: ' + data.gyroscope.y + ' Z: ' + data.gyroscope.z;
        }).catch(error => console.error('Error fetching data:', error));
    }, 1000); // Update every second
});
