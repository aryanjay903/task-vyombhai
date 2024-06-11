import { useState, useEffect, useRef } from "react";

const SecondExample = () => {
	return (
		<div className="container my-3">
			<div>
				<h3>Exact changed value not displayed</h3>
				<p>
					If you show ref.current in the JSX, the number won’t update on click.
					This is because setting ref.current does not trigger a re-render.
					Information that’s used for rendering should be state instead.
				</p>
			</div>
			<SimpleCount />
			<CountMethod />
		</div>
	);
};
const SimpleCount = () => {
	const prevCountRef = useRef(0);
	console.log(prevCountRef.current);
	return (
		<div>
			<button onClick={(prevCountRef) => prevCountRef.current++}>
				{prevCountRef.current} -- Increment
			</button>
		</div>
	);
};

const CountMethod = () => {
	//? if you assign value of prevcountref.current else it is execute
	const [count, setCount] = useState(0);
	const prevCountRef = useRef();

	useEffect(() => {
		prevCountRef.current = count;
	}, [count]);
	return (
		<div>
			<p>
				Current count: {count} - Previous count: {prevCountRef.current}
			</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default SecondExample;
