const loggedReducer = (state = false, action: { type: unknown }) => {
	switch (action.type) {
		case "SIGN_IN":
			return !state;
	}
};

export default loggedReducer;
