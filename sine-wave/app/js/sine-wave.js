
(() => {
    let entity      = document.getElementById('sine-wave'),
        canvas      = entity.getContext('2d');

    let width       = entity.width      = document.documentElement.clientWidth,
        height      = entity.height     = document.documentElement.clientHeight;

    let settings    = {
        height      : 100,
        count       : 21,
        distance    : 10,
        span        : Math.PI,
        radius      : 10,
        speed       : Math.PI / 180 * 3
    }; 

    let points     = new Array(settings.count).fill().map((item, index) => ({
        angle   : settings.span / settings.count * index,
        x       : (settings.distance + settings.radius * 2) * index
    }));

    let length      = (settings.distance + settings.radius * 2) * settings.count;

    function loop() {
        canvas.fillStyle = '#222';
        canvas.fillRect(0, 0, width, height);

        points.forEach((item, index) => {
            item.angle += settings.speed;

            canvas.beginPath();
            canvas.arc(
                item.x + width / 2 - length / 2, 
                Math.sin(item.angle) * settings.height + height / 2, 
                settings.radius, 
                0, 
                Math.PI * 2);
            canvas.closePath();
            canvas.fillStyle = `hsl(${item.angle * 37}, 50%, 50%)`;
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