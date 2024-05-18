//todo: Updating state from a memoized callback
import { Input, Table, Button, CardTitle } from "reactstrap";
import { useCallback, useState, memo } from "react";

const TilteComponent = () => {
	console.log("TilteComponent");
	const [count, setCount] = useState(0);
	const [textField, setTextField] = useState("TilteComponent");
	const [todo, setTodo] = useState(["todo 1", "todo 2", "todo 3"]);
	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};
	const handleChange = (e) => {
		const { value } = e.target;
		setTextField(value);
	};

	//? when i use useCallback or not it's also same result it's value can be memorized and never render component doesn't need
	// const addTodo = () => {
	// 	setTodo([...todo, textField]);
	// 	setTextField("");
	// };
	//? if you use useCallback hook to increase performance of web component optimization
	const addTodo = useCallback(() => {
		setTodo((preTodo) => [...preTodo, textField]);
		setTextField("");
	}, [todo]);
	return (
		<div>
			<CardTitle tag="h5">FourthExample</CardTitle>
			<Table striped bordered responsive hover>
				<tbody>
					<tr className="text-center">
						<th>increment & decrement</th>
						<td className="d-flex align-items-center justify-content-around">
							<Button onClick={increment} color="warning">
								+
							</Button>
							<h5>{count}</h5>
							<Button onClick={decrement} color="warning">
								-
							</Button>
						</td>
					</tr>
					<tr className="text-center">
						<th>
							<div className="d-flex align-items-center justify-content-between">
								<Button color="primary" onClick={addTodo}>
									Please Add Title
								</Button>
								<Input type="text" value={textField} onChange={handleChange} />
							</div>
						</th>
						<td>
							{todo.length > 0 &&
								todo.map((todo, idx) => <TodoList key={idx} todo={todo} />)}
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

const TodoList = memo(({ todo }) => {
	console.log("todoList");
	return <li>{todo}</li>;
});

export default TilteComponent;
