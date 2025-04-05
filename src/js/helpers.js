// helpers.js
export function getColorFromName(name) {
	let hash = 0;
	for (let i = 0; i < name.length; i++) {
		hash = name.charCodeAt(i) + ((hash << 5) - hash);
	}
	const r = (hash >> 16) & 255;
	const g = (hash >> 8) & 255;
	const b = hash & 255;
	return `rgb(${r}, ${g}, ${b})`;
}
