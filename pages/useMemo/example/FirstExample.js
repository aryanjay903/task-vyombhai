import useProduct from "@/hook/useProduct";
import { memo, useMemo, useState } from "react";
// memo: relies on the component's props to determine whether it needs to re-render. It performs a shallow comparison by default, but allows for a custom comparison function if needed.
// useMemo: explicitly specifies its dependencies as a second argument in the form of an array.
// memo: caches a component's output based on its props.
// useMemo: caches a value based on its dependencies.
// memo: is used when you find an existing component that is expensive to render, and you don't have the option to optimize it internally.
// useMemo: is for internally optimizing a component by saving the return value of an expensive function call.
const ExpensiveComponent = ({ number }) => {
	console.log("child");
	const expensiveCalculation = (num) => {
		//? if memo() not use and only use useMemo() hook to not run function
		console.log("Calculating...");
		// Simulate an expensive calculation
		let result = 0;
		for (let i = 0; i < 1000000000; i++) {
			result += num;
		}
		return result;
	};
	const memoizedValue = expensiveCalculation(number);
	return (
		<div>
			<p>Result of expensive calculation: {memoizedValue}</p>
		</div>
	);
};
const MemorizedExpensiveComponent = memo(({ number }) => {
	console.log("memo child");
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
	return (
		<div>
			<p>Result of expensive calculation: {memoizedValue}</p>
		</div>
	);
});
MemorizedExpensiveComponent.displayName = "MemorizedExpensiveComponent"

// const HookShow = () => {
// 	//! if i use memo() on data then it will render when id is changed
// 	// const id = useMemo(() => [data]);
// 	const data = useProduct(2, "https://fakestoreapi.com/products");
// 	return (
// 		<div>
// 			<h1>useMemo Hook</h1>
// 			{data.map((product) => (
// 				<li key={product.id}>{product?.title}</li>
// 			))}
// 		</div>
// 	);
// };

const WithoutMemoOrUseMemo = () => {
	console.log("without memo() or usememo()");
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState(42);

	return (
		<div className="container my-3">
			<h1>Without use useMemo() & memo()</h1>
			<button onClick={() => setCount(count + 1)}>Increment Count</button>
			<button onClick={() => setNumber(number + 1)}>Change Number</button>
			<p>Count: {count}</p>
			<ExpensiveComponent number={number} />
		</div>
	);
};

const WithMemoOrUseMemo = () => {
	console.log("with memo() or usememo()");
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState(42);

	return (
		<div className="container my-3">
			<h1>With use useMemo() & memo()</h1>
			<button onClick={() => setCount(count + 1)}>Increment Count</button>
			<button onClick={() => setNumber(number + 1)}>Change Number</button>
			<p>Count: {count}</p>
			<MemorizedExpensiveComponent number={number} />
		</div>
	);
};

const Task = () => {
	console.log("parent");
	return (
		<div className="container my-3">
			<WithoutMemoOrUseMemo />
			<WithMemoOrUseMemo />
			{/* <HookShow /> */}
		</div>
	);
};
export default Task;
