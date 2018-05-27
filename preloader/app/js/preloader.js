
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
        constructor(canvas, x, y) {
            this.reverse    = false;
            this.angle      = 0;
            this.speed      = 0.05;
            this.radius     = 77;
            this.thickness  = 5;
            this.canvas     = canvas;
            this.color      = 'crimson';
            this.style      = 'round';
            this.width      = 7;
            this.x          = x;
            this.y          = y;
        };

        update() {
            this.angle      += this.speed;

            if (this.angle > Math.PI * 2) {
                this.angle      = 0;
                this.reverse    = !this.reverse;
            };
        };

        draw() {
            this.update();

            this.canvas.beginPath();

            this.reverse 
                ? this.canvas.arc(this.x, this.y, this.radius, 0, this.angle)
                : this.canvas.arc(this.x, this.y, this.radius, this.angle, Math.PI * 2);
           
            this.canvas.strokeStyle  = this.color;
            this.canvas.stroke();
            this.canvas.lineWidth    = this.width;
            this.canvas.lineCap      = this.style;
            this.canvas.closePath();
        };
    };

    function draw() {
        canvas.fill();
        circle.draw();

        requestAnimationFrame(draw);
    };

    function init() {
        canvas = new Canvas('preloader', '#222');
        circle = new Circle(canvas.get, canvas.center.x, canvas.center.y);

        requestAnimationFrame(draw);
    };

    init();
})();