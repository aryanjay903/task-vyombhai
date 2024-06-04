import { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";

const ThirdExample = () => {
	let [timer, setTimer] = useState(0);
	// let timer = 0;
	const variable = useRef(0);
	useEffect(() => {
		variable.current = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);
		return () => {
			clearInterval(variable.current);
			variable.current = 0;
		};
	}, []);
	return (
		<>
			<div className="container my-3">
				<div>{timer}</div>
				<Button color="primary" onClick={() => setTimer(0)}>
					Reset
				</Button>
			</div>
		</>
	);
};

export default ThirdExample;
