
class Canvas {
    constructor(selector, parent = document.documentElement) {
        this._canvas    = document.getElementById(selector);
        this._context   = this._canvas.getContext('2d');
        this._parent    = parent;

        this.resize();
    };

    get width() {
        return this._canvas.width;
    };

    get height() {
        return this._canvas.height;
    };

    get center() {
        return {
            x: this.width   / 2,
            y: this.height  / 2
        };
    };

    get context() {
        return this._context;
    };

    clear() {
        this._context.clearRect(0, 0, this.width, this.height);
    };

    fill(color) {
        this._context.fillStyle = color;
        this._context.fillRect(0, 0, this.width, this.height);
    };

    resize() {
        this._canvas.width  = this._parent.clientWidth;
        this._canvas.height = this._parent.clientHeight;
    };
};