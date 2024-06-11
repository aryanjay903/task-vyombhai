import { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";

const ThirdExample = () => {
	let [timer, setTimer] = useState(0);
	// let timer = 0;
	let variable = 0;
	useEffect(() => {
		variable = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);
		return () => {
			clearInterval(variable);
			variable = 0;
		};
	}, []);
	return (
		<div className="container my-3">
			<div>
				<h3>Simple Count Example Without useReducer</h3>
			</div>
			<div>
				<div>{timer}</div>
				<Button color="primary" onClick={() => setTimer(0)}>
					Reset
				</Button>
			</div>
		</div>
	);
};

export default ThirdExample;
