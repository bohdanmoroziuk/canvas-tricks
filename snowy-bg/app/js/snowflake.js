
class Snowflake {
    constructor(width, height, context, color, size) {
        this._width     = width;
        this._height    = height;
        this._context   = context;
        this._color     = color;

        this._x          = Math.random() * width;
        this._y          = Math.random() * height;
        this._radius     = Math.random() * (size - 1) + 1;
        this._density    = Math.random() + 0.7;   
    };

    draw() {
        this._context.beginPath();
        this._context.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
        this._context.fillStyle = this._color;
        this._context.fill();
        this._context.closePath();

        this.move();
    };

    move() {
        this._y += Math.pow(this._density, 2);

        this.reflect();
    };

    reflect() {
        if (this._y > this._height) {
            this._x = Math.random() * this._width;
            this._y = 0;
        }
    };
};