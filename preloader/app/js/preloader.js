
(() => {
    let circle      = null;
    let canvas      = null; 

    class Canvas {
        constructor(id, fillColor) {
            this.entity     = document.getElementById(id);
            this.canvas     = this.entity.getContext('2d'); 

            this.fillColor  = fillColor;

            this.resize();
        };

        get get() {
            return this.canvas;
        };

        get width() {
            return this.entity.width;
        };

        get height() {
            return this.entity.height;
        };

        get center() {
            return {
                x: this.width   / 2,
                y: this.height  / 2
            };
        };

        resize() {
            this.entity.width   = document.documentElement.clientWidth;
            this.entity.height  = document.documentElement.clientHeight;
        };

        fill() {
            this.canvas.fillStyle = this.fillColor;
            this.canvas.fillRect(0, 0, this.width, this.height);
        };
    };

    class Circle {
        constructor(canvas, x, y, settings) {
            this.reverse    = false;
            this.angle      = 0;
            this.canvas     = canvas;
            this.x          = x;
            this.y          = y;
            this.settings   = settings; 
        };

        update() {
            this.angle      += this.settings.speed;

            if (this.angle > Math.PI * 2) {
                this.angle      = 0;
                this.reverse    = !this.reverse;
            };
        };

        inform() {
            let value                   = parseInt((this.angle * 100) / (Math.PI * 2), 10);

            this.canvas.font            = this.settings.font;
            this.canvas.fillStyle       = this.settings.color;
            this.canvas.textAlign       = 'center';
            this.canvas.textBaseline    = 'middle';

            this.canvas.fillText(`${value}%`, this.x, this.y);
        };

        draw() {
            this.update();

            console.log(`angle ${this.angle}`);

            this.canvas.beginPath();

            this.reverse 
                ? this.canvas.arc(this.x, this.y, this.settings.radius, 0, this.angle)
                : this.canvas.arc(this.x, this.y, this.settings.radius, this.angle, Math.PI * 2);

            this.canvas.strokeStyle     = this.settings.color;
            this.canvas.stroke();
            this.canvas.lineWidth       = this.settings.width;
            this.canvas.lineCap         = this.settings.style;
            this.canvas.closePath();
        };
    };

    function draw() {
        canvas.fill();
        
        circle.draw();
        circle.inform();

        requestAnimationFrame(draw);
    };

    function init() {
        canvas = new Canvas('preloader', '#222');
        circle = new Circle(canvas.get, canvas.center.x, canvas.center.y, {
            speed       : 0.02,
            radius      : 77,
            thickness   : 5,
            color       : 'crimson',
            style       : 'round',
            width       : 7,
            font        : '30px Arial'
        });

        requestAnimationFrame(draw);
    };

    init();
})();