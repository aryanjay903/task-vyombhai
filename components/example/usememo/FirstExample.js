import { memo, useMemo, useState } from "react";

const ExpensiveComponent = memo(({ number }) => {
	console.log("ExpensiveComponent");
	const expensiveCalculation = (num) => {
		console.log("Calculating...");
		// Simulate an expensive calculation
		let result = 0;
		for (let i = 0; i < 1000000000; i++) {
			result += num;
		}
		return result;
	};

	const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);
	// const memoizedValue = expensiveCalculation(number);

	return (
		<div>
			<p>Result of expensive calculation: {memoizedValue}</p>
		</div>
	);
});

function Task() {
	console.log("Task");
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState(42);

	return (
		<div>
			<h1>useMemo Example</h1>
			<button onClick={() => setCount(count + 1)}>Increment Count</button>
			<button onClick={() => setNumber(number + 1)}>Change Number</button>
			<p>Count: {count}</p>
			<ExpensiveComponent number={number} />
		</div>
	);
}

export default Task;
