document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-button').addEventListener('click', function() {
        document.getElementById('loading-screen').style.transform = 'translateY(100%)';
    });

    document.getElementById('start-button-hovered').addEventListener('click', function() {
        document.getElementById('loading-screen').style.transform = 'translateY(100%)';
    });
});
