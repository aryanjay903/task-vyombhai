//todo: Skipping re-rendering when components only need of event or style
import { memo, useCallback, useState } from "react";
import { Button, CardTitle, Table } from "reactstrap";
const Task = () => {
	console.log("CountComponent");
	const [count, setCount] = useState(0);
	const [countt, setCountt] = useState(1);
	const increment = () => setCount((preCount) => preCount + 1);
	// const increment = useCallback(() => setCount(count + 1), [count]);
	const increment2 = useCallback(() => setCountt((countt) => countt + 1), []);
	// const increment2 = useCallback(() => setCountt(countt + 1), [countt]);
	return (
		<div>
			<CardTitle tag="h5">ThirdExample</CardTitle>
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
							<UnderTask onIncrement={increment2} />
						</th>
						<td>
							<h3>{countt}</h3>
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

const UnderTask = memo(({ onIncrement }) => {
	console.log("CountComponent memo()");
	return (
		<Button color="primary" onClick={onIncrement}>
			Increment
		</Button>
	);
});

export default Task;
