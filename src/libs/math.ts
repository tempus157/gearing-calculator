const clamp = (x: number, min: number, max: number) => {
	return Math.min(Math.max(x, min), max);
};

const round = (x: number, digit: number) => {
	const power = 10 ** digit;
	return Math.round(x * power) / power;
};

const lerp = (x: number, y: number, t: number) => {
	return x * (1 - t) + y * t;
};

const inverseLerp = (x: number, y: number, value: number) => {
	return clamp((value - x) / (y - x), 0, 1);
};

export { clamp, round, lerp, inverseLerp };
