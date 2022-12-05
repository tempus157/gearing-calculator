export const calculateGearing = (
	speed: number,
	heavy: number,
	shape: number,
	first: number
) => {
	let ratio = first;
	const result = [ratio];
	const actualShape = (shape / 10 + 1) * speed;

	for (let i = 1; i < speed; i++) {
		const x = i / (speed - 1);
		ratio -= ratio / (actualShape * x + heavy);
		result.push(ratio);
	}
	return result;
};
