// STEP 1 - Build a simple reducer and initial state

export const initialList = {
	todo: [
		{
			task: 'Make Bed',
			id: 1,
			finished: false
		},
		{
			task: 'Breakfast',
			id: 2,
			finished: false
		},
		{
			task: 'Code',
			id: 3,
			finished: false
		},
		{
			task: 'Sleep',
			id: 4,
			finished: false
		}
	]
};

// STEP 3 - Adding todos
export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TASK':
			console.log('action.payload', action);
			//   console.log("state",state)
			return {
				...state,
				todo: [
					...state.todo,
					{
						task: action.payload,
						id: Date.now(),
						finished: false
					}
				]
			};

		// STEP 5 - Clearing completed todos
		case 'CLEAR_ALL':
			return {
				...state,
				todo: state.todo.filter((item) => !item.finished)
			};
		case 'TOGGLE_IT':
			return {
				...state,
				todo: state.todo.map((item) => {
					if (action.payload === item.id) {
						return {
							...item,
							finished: !item.finished
						};
					}
					return {
						...item
					};
				})
			};
		default:
			return state;
	}
};
