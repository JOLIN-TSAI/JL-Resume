const counterReducer = (
	state = 0,
	action: {
		payload: number;
		type: unknown;
	}
) => {
	switch (action.type) {
		case "INCREMENT":
			return state + action.payload;
		case "DECREMENT":
			return state - action.payload;
	}
};

export default counterReducer;
