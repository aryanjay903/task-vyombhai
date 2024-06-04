import { Button, Input } from "reactstrap";
import { TodoList } from "./Provider";
import { useContext, useState } from "react";
const ComboForReducer = () => {
	const [text, setText] = useState();
	const { todoList, addTodo, removeTodo } = useContext(TodoList);
	return (
		<div className="container my-3">
			<Input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			{todoList.map((todo) => (
				<li key={todo}>{todo}</li>
			))}
			<div>
				<Button
					color="primary"
					onClick={() => {
						addTodo(text);
						setText("");
					}}
				>
					Add Todo
				</Button>
				<Button
					color="primary"
					onClick={() => {
						removeTodo(text);
						setText("");
					}}
				>
					Remove Todo
				</Button>
			</div>
		</div>
	);
};

export default ComboForReducer;
