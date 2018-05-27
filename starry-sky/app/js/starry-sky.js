
(() => {
    let entity      = document.getElementById('starry-sky'), 
        canvas      = entity.getContext('2d');

    let width       = entity.width      = document.documentElement.clientWidth,
        height      = entity.height     = document.documentElement.clientHeight;

    let stars       = new Array(100).fill().map(() => ({
        radius  : random(width),
        speed   : random(0.01),
        angle   : random(Math.PI * 2)
    }));

    function random(multiplier) {
        return Math.random() * multiplier;
    };

    function loop() {
        canvas.fillStyle = 'rgba(0, 0, 8, .7)';
        canvas.fillRect(0, 0, width, height);

        stars.forEach(star => {
            star.angle += star.speed;

            canvas.beginPath();
            canvas.arc(
                Math.cos(star.angle) * star.radius + width  / 2, 
                Math.sin(star.angle) * star.radius + height / 2, 
                1, 0, 
                Math.PI * 2);
            canvas.closePath();
            canvas.fillStyle = '#fff';
            canvas.fill();
        });

        requestAnimationFrame(loop);
    };

    function setup() {
        requestAnimationFrame(loop);
    };

    window.addEventListener('resize', () => {
        width       = entity.width      = document.documentElement.clientWidth;
        height      = entity.height     = document.documentElement.clientHeight;
    });

    setup();
})();