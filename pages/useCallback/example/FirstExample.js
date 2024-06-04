// todo: Skipping re-rendering when props are unchanged
import React, { useEffect, memo, useCallback, useMemo, useState } from "react";
import { Button, CardTitle, Table } from "reactstrap";

const Task = () => {
	console.log("parent");
	return (
		<>
			<WithoutUsingUseCallbackWithoutMemo />
			<WithUsingUseCallbackWithoutMemo />
			<WithoutUsingUseCallbackWithMemo />
			<WithUsingUseCallbackWithMemo />
		</>
	);
};

const WithoutUsingUseCallbackWithoutMemo = () => {
	console.log("without using useCallback without memo");
	const [count, setCount] = useState(0);
	const [countt, setCountt] = useState(1);

	//! using or not using useCallback hook same output(every component re-render when i click on button) without memorize(memo())
	//? using or not using useCallback hook same output(single component render when i click on button) with memo()
	const increment = () => {
		console.log("increment");
		setCount((preCount) => preCount + 1);
	};
	const increment2 = () => {
		console.log("increment2");
		setCountt((preCount) => preCount + 1);
	};

	return (
		<div className="container my-3">
			<CardTitle tag="h5">
				Without Using useCallback() & Without memo()
			</CardTitle>
			<Table striped bordered responsive hover>
				<tbody>
					<tr className="text-center">
						<th>
							<Button onClick={increment} color="primary">
								Task 1
							</Button>
						</th>
						<td>
							<h3>{count}</h3>
						</td>
					</tr>
					<tr className="text-center">
						<UnderTask value={countt} onIncrement={increment2} />
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

const WithUsingUseCallbackWithoutMemo = () => {
	console.log("without using useCallback without memo");
	const [count, setCount] = useState(0);
	const [countt, setCountt] = useState(1);

	//! using or not using useCallback hook same output(every component re-render when i click on button) without memorize(memo())
	//? using or not using useCallback hook same output(single component render when i click on button) with memo()
	const increment = () => {
		console.log("increment");
		setCount((preCount) => preCount + 1);
	};
	const increment2 = useCallback(() => {
		console.log("increment2");
		setCountt((preCount) => preCount + 1);
	}, []);

	return (
		<div className="container my-3">
			<CardTitle tag="h5">With Using useCallback() & Without memo()</CardTitle>
			<Table striped bordered responsive hover>
				<tbody>
					<tr className="text-center">
						<th>
							<Button onClick={increment} color="primary">
								Task 1
							</Button>
						</th>
						<td>
							<h3>{count}</h3>
						</td>
					</tr>
					<tr className="text-center">
						<UnderTask value={countt} onIncrement={increment2} />
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

const WithoutUsingUseCallbackWithMemo = () => {
	console.log("without using useCallback with memo");
	const [count, setCount] = useState(0);
	const [countt, setCountt] = useState(1);

	//! using or not using useCallback hook same output(every component re-render when i click on button) without memorize(memo())
	//? using or not using useCallback hook same output(single component render when i click on button) with memo()
	const increment = () => {
		console.log("increment");
		setCount((preCount) => preCount + 1);
	};
	const increment2 = () => {
		console.log("increment2");
		setCountt((preCount) => preCount + 1);
	};

	return (
		<div className="container my-3">
			<CardTitle tag="h5">Without Using useCallback() & With memo()</CardTitle>
			<Table striped bordered responsive hover>
				<tbody>
					<tr className="text-center">
						<th>
							<Button onClick={increment} color="primary">
								Task 1
							</Button>
						</th>
						<td>
							<h3>{count}</h3>
						</td>
					</tr>
					<tr className="text-center">
						<UnderTaskMemo value={countt} onIncrement={increment2} />
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

const WithUsingUseCallbackWithMemo = () => {
	console.log("without using useCallback with memo");
	const [count, setCount] = useState(0);
	const [countt, setCountt] = useState(1);

	//! using or not using useCallback hook same output(every component re-render when i click on button) without memorize(memo())
	//? using or not using useCallback hook same output(single component render when i click on button) with memo()
	const increment = () => {
		console.log("increment");
		setCount((preCount) => preCount + 1);
	};
	const increment2 = useCallback(() => {
		console.log("increment2");
		setCountt((preCount) => preCount + 1);
	}, []);

	return (
		<div className="container my-3">
			<CardTitle tag="h5">With Using useCallback() & With memo()</CardTitle>
			<Table striped bordered responsive hover>
				<tbody>
					<tr className="text-center">
						<th>
							<Button onClick={increment} color="primary">
								Task 1
							</Button>
						</th>
						<td>
							<h3>{count}</h3>
						</td>
					</tr>
					<tr className="text-center">
						<UnderTaskMemo value={countt} onIncrement={increment2} />
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

//! when i not use memo() on UnderTask component when props are changed or not it will render
//? when i use memo() on UnderTask component when props are changed it will render other wise it will not render
const UnderTask = ({ value, onIncrement }) => {
	console.log("child");
	return (
		<>
			<th>
				<Button onClick={onIncrement} color="primary">
					Task 2
				</Button>
			</th>
			<td>
				<h3>{value}</h3>
			</td>
		</>
	);
};
const UnderTaskMemo = memo(({ value, onIncrement }) => {
	console.log("memo child");
	return (
		<>
			<th>
				<Button onClick={onIncrement} color="primary">
					Task 2
				</Button>
			</th>
			<td>
				<h3>{value}</h3>
			</td>
		</>
	);
});

export default Task;
