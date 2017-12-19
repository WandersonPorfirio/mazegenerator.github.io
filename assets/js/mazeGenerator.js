(function () {

	var rows = 10, cols = 10;

	var canvas, ctx, tileSize;

	function createCanvas (w, h) {
		canvas = document.createElement('canvas');
		canvas.width  = w;
		canvas.height = h;
		canvas.textContent = 'sem suporte';

		document.body.appendChild(canvas);

		ctx = canvas.getContext('2d');

		tileSize = canvas.width / rows;

		tabuleiro = fillMatrix(rows, cols);

		update();
	};


	function fillMatrix (w, h) { // rows, cols
		let matrix = [];

		while (h--) {
			let preserve_W = 0, row = [];

			while (w > preserve_W) {
				row.push(new Spot(preserve_W, h, tileSize));
				preserve_W++;
			};

			matrix.unshift(row);
		};

		return matrix;
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