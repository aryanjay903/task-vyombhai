// todo: Skipping re-rendering when props are unchanged
import React, { memo, useCallback, useState } from "react";
import { Button, CardTitle, Table } from "reactstrap";
const Task = () => {
	console.log("FirstExample");
	const [count, setCount] = useState(0);
	const [countt, setCountt] = useState(1);

	//! using or not using useCallback hook same output(every component re-render when i click on button) without memorize(memo())
	//? using or not using useCallback hook same output(single component render when i click on button) with memo()
	const increment = () => setCount((preCount) => preCount + 1);
	// const increment = useCallback(() => setCount((preCount) => preCount + 1), []);
	const increment2 = useCallback(
		() => setCountt((preCount) => preCount + 1),
		[count]
	);

	// const handleCountt = useCallback(
	// 	() => setCountt((preCount) => preCount + 1),
	// 	[]
	// );

	return (
		<div>
			<CardTitle tag="h5">FirstExample</CardTitle>
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
						<th>
							<Button onClick={increment2} color="primary">
								Task 2
							</Button>
						</th>
						<td>
							<UnderTask value={countt} />
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

//! when i not use memo() on UnderTask component when props are changed or not it will render
//? when i use memo() on UnderTask component when props are changed it will render other wise it will not render
const UnderTask = memo(({ value }) => {
	console.log("FirstExample memo()");
	return (
		<div>
			<h3>{value}</h3>
		</div>
	);
});

export default Task;
