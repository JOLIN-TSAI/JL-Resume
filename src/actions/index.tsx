export const increment = (nr: unknown) => {
	return {
		type: "INCREMENT",
		payload: nr,
	};
};

export const decrement = (nr: unknown) => {
	return {
		type: "DECREMENT",
		payload: nr,
	};
};
