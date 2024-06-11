import { useId, useState } from "react";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { v1 } from "uuid";

const FirstExample = () => {
	return (
		<div className="container my-3">
			<UseUseID />
			<IdGenerateAuto />
		</div>
	);
};

const UseUseID = () => {
	const labelId = useId();
	return (
		<>
			<h3>useId() hook used to generate unique id</h3>
			<Row>
				<Col sm="6">
					<FormGroup>
						<Label for={`${labelId}-FirstName`}>First Name</Label>
						<Input
							type="text"
							id={`${labelId}-FirstName`}
							placeholder={labelId}
						/>
					</FormGroup>
				</Col>
				<Col sm="6">
					<FormGroup>
						<Label for={`${labelId}-LastName`}>Last Name</Label>
						<Input
							type="text"
							id={`${labelId}-LastName`}
							placeholder={labelId}
						/>
					</FormGroup>
				</Col>
			</Row>
		</>
	);
};
const IdGenerateAuto = () => {
	const [inputText, setInputText] = useState("");
	const id = v1();
	const [todo, setTodo] = useState([]);
	// console.log(todo);
	return (
		<div>
			<div>
				<h3>uniqe id generated using uuid dependencie</h3>
			</div>
			<div>
				<Input
					type="text"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>
				<Button
					color="primary"
					onClick={() => {
						if (inputText !== "")
							setTodo([
								...todo,
								{ id: id + inputText + todo.length, name: inputText },
							]);
					}}
				>
					ADD +
				</Button>
				{todo.map(({ id, name }) => (
					<li key={id}>{name}</li>
				))}
			</div>
		</div>
	);
};

export default FirstExample;
