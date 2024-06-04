import { useReducer, useEffect, useRef } from "react";
import { Button } from "reactstrap";

const SecondExample = () => {
	const initialState = {
		time: 0,
		isRunning: false,
	};
	const reducer = (state, action) => {
		switch (action.type) {
			case "start":
				return { ...state, isRunning: true };
			case "stop":
				return { ...state, isRunning: false };
			case "reset":
				return { ...state, time: 0, isRunning: false };
			case "tick":
				return { ...state, time: state.time + 1 };
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const idRef = useRef(0);

	useEffect(() => {
		if (!state.isRunning) {
			return;
		}
		idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
		return () => {
			clearInterval(idRef.current);
			idRef.current = 0;
		};
	}, [state.isRunning]);

	return (
		<div className="d-flex gap-3 container my-3">
			{state.time}s
			<Button color="primary" onClick={() => dispatch({ type: "start" })}>
				Start
			</Button>
			<Button color="danger" onClick={() => dispatch({ type: "stop" })}>
				Stop
			</Button>
			<Button color="info" onClick={() => dispatch({ type: "reset" })}>
				Reset
			</Button>
		</div>
	);
};
export default SecondExample;
