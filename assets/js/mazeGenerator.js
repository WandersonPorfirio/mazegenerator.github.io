(function () {

	var canvas, ctx;

	function createCanvas (w, h) {
		canvas = document.createElement('canvas');
		canvas.width  = w;
		canvas.height = h;
		canvas.textContent = 'sem suporte';

		document.body.appendChild(canvas);

		ctx = canvas.getContext('2d');

		update();
	};


	function clearCanvas (newColor) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawRect(0, 0, canvas.width, canvas.height, newColor);
	};


	function drawRect (x, y, w, h, color) {
		ctx.fillStyle = color || '#FFF';
		ctx.fillRect(x, y, w, h);
	};


	function draw () {
		clearCanvas('#e0e0e0');
	};


	function update () {
		draw();

		requestAnimationFrame(update, canvas);
	};

	createCanvas(480, 480);
} ());