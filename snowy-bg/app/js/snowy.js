
let parent      = document.getElementsByClassName('wrapper')[0];

let canvas      = new Canvas('snowy', parent);

let snowflakes  = new Snowflakes();

let amount      = 60;

function render() {
    canvas.fill('#102a54');

    snowflakes.draw();

    requestAnimationFrame(render);
};

function init() {
    for (let i = 0; i < amount; i++) {
        snowflakes.add(new Snowflake(
            canvas.width,
            canvas.height,
            canvas.context,
            '#fff',
            3
        ));
    };

    requestAnimationFrame(render);
};

window.addEventListener('resize', () => canvas.resize());

init();