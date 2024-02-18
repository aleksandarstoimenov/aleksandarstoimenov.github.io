document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-button').addEventListener('click', function() {
        document.getElementById('loading-screen').style.transform = 'translateY(200%)';
    });

    document.getElementById('start-button-hovered').addEventListener('click', function() {
        document.getElementById('loading-screen').style.transform = 'translateY(200%)';
    });

    document.getElementById('popup-cross').addEventListener('click', function() {
        document.getElementById('text-container-phone').style.transform = 'translate(300%, -50%)';
    });
});
