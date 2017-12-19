

	// every cell seems like this
	function Spot (x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;

		this.neighbors = [];

		this.wall = [1, 1, 1, 1]; // top, right, bottom, left

		this.setNeighbors = function (matriz) {
			let x = this.x,
				y = this.y;

			for (let i = -1; i <= 1; i++) {
				if (!matriz[y + i]) continue;
				for (let j = -1; j <= 1; j++) {
					let neighbor = matriz[y + i][x + j];
					if (!neighbor || !i && !j || (i % 2) && (j % 2)) continue;
					this.neighbors.push(neighbor);
				};
			};
		};
	};