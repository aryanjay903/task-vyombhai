//todo: Updating state from a memoized callback
import { Table, Button, CardTitle } from "reactstrap";
import { useCallback, useState, memo } from "react";

const TilteComponent = () => {
	console.log("parent");
	return (
		<div className="container my-3">
			<WithoutUsingUseCallbackWithoutMemo />
			<WithUsingUseCallbackWithoutMemo />
			<WithoutUsingUseCallbackWithMemo />
			<WithUsingUseCallbackWithMemo />
		</div>
	);
};

const WithoutUsingUseCallbackWithoutMemo = () => {
	console.log("without using useCallback without memo");
	const [count, setCount] = useState(0);
	const [todo, setTodo] = useState(["todo 1", "todo 2", "todo 3"]);
	const increment = () => {
		console.log("increment");
		setCount(count + 1);
	};
	const decrement = () => {
		console.log("decrement");
		setCount(count - 1);
	};

	//? when i use useCallback or not it's also same result it's value can be memorized and never render component doesn't need
	const addTodo = () => {
		console.log("addTodo-->1");
		setTodo((preTodo) => [...preTodo, `new todo ${count}`]);
	};
	return (
		<div className="container my-3">
			<CardTitle tag="h5">
				Without Using useCallback() & Without memo()
			</CardTitle>
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
						<TodoList todo={todo} onClick={addTodo} />
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

const WithUsingUseCallbackWithoutMemo = () => {
	console.log("with using useCallback without memo");
	const [count, setCount] = useState(0);
	const [todo, setTodo] = useState(["todo 1", "todo 2", "todo 3"]);
	const increment = () => {
		console.log("increment");
		setCount(count + 1);
	};
	const decrement = () => {
		console.log("decrement");
		setCount(count - 1);
	};
	//? if you use useCallback hook to increase performance of web component optimization
	const addTodo = useCallback(() => {
		console.log("addTodo-->2");
		setTodo((preTodo) => [...preTodo, `new todo ${count}`]);
	}, [count]);
	return (
		<div className="container my-3">
			<CardTitle tag="h5">With Using useCallback() & Without memo() </CardTitle>
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
						<TodoList todo={todo} onClick={addTodo} />
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

const WithoutUsingUseCallbackWithMemo = () => {
	console.log("without using useCallback with memo");
	const [count, setCount] = useState(0);
	const [todo, setTodo] = useState(["todo 1", "todo 2", "todo 3"]);
	const increment = () => {
		console.log("increment");
		setCount(count + 1);
	};
	const decrement = () => {
		console.log("decrement");
		setCount(count - 1);
	};

	//? when i use useCallback or not it's also same result it's value can be memorized and never render component doesn't need
	const addTodo = () => {
		console.log("addTodo-->1");
		setTodo((preTodo) => [...preTodo, `new todo ${count}`]);
	};
	return (
		<div className="container my-3">
			<CardTitle tag="h5">Without Using useCallback() & With memo()</CardTitle>
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
						<TodoListMemo todo={todo} onClick={addTodo} />
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

const WithUsingUseCallbackWithMemo = () => {
	console.log("with using useCallback with memo");
	const [count, setCount] = useState(0);
	const [todo, setTodo] = useState(["todo 1", "todo 2", "todo 3"]);
	const increment = () => {
		console.log("increment");
		setCount(count + 1);
	};
	const decrement = () => {
		console.log("decrement");
		setCount(count - 1);
	};
	//? if you use useCallback hook to increase performance of web component optimization
	const addTodo = useCallback(() => {
		console.log("addTodo-->2");
		setTodo((preTodo) => [...preTodo, `new todo ${count}`]);
	}, [count]);
	return (
		<div className="container my-3">
			<CardTitle tag="h5">With Using useCallback() & With memo() </CardTitle>
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
						<TodoListMemo todo={todo} onClick={addTodo} />
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

const TodoList = ({ todo, onClick }) => {
	console.log("child");
	return (
		<>
			<th>
				<div className="d-flex align-items-center justify-content-between">
					<Button color="primary" onClick={onClick}>
						Please Add Title
					</Button>
				</div>
			</th>
			<td>
				{todo.length > 0 && todo.map((todo, idx) => <li key={idx}>{todo}</li>)}
			</td>
		</>
	);
};

const TodoListMemo = memo(({ todo, onClick }) => {
	console.log("memo child");
	return (
		<>
			<th>
				<div className="d-flex align-items-center justify-content-between">
					<Button color="primary" onClick={onClick}>
						Please Add Title
					</Button>
				</div>
			</th>
			<td>
				{todo.length > 0 && todo.map((todo, idx) => <li key={idx}>{todo}</li>)}
			</td>
		</>
	);
});
TodoListMemo.displayName = "TodoListMemo";
export default TilteComponent;
