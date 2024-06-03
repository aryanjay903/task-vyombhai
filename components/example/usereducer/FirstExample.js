import { useReducer } from "react";
import { Button } from "reactstrap";

const FirstExample = () => {
	const initialstate = 0;
	const reducer = (state, action) => {
		switch (action.type) {
			case "INCREMENT":
				return state + 1;
			case "DECREMENT":
				return state - 1;
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, initialstate);

	const actionForIncrement = {
		type: "INCREMENT",
	};
	const actionForDecrement = {
		type: "DECREMENT",
	};

	return (
		<div className="d-flex gap-3">
			<Button color="warning" onClick={() => dispatch(actionForIncrement)}>
				Increment {state}
			</Button>
			<Button color="warning" onClick={() => dispatch(actionForDecrement)}>
				Decrement {state}
			</Button>
		</div>
	);
};

export default FirstExample;
