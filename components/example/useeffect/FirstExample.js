import { useEffect, useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";

//! dont't use let,var in dependencies because it will take only useState value
// var firstExample = 0;
const FirstExample = (props) => {
	const [count, setCount] = useState(0);
	const [query, setQuery] = useState();
	const [data, setData] = useState([]);
	//? when you parse as a props from parent component it will render when change state
	useEffect(() => {
		console.log("first useEffect");
		return () => {
			console.log("first cleanup useEffect");
		};
	}, [props.cont]);

	//? when state is changed it will render when change state
	useEffect(() => {
		console.log("second useEffect");
		return () => {
			console.log("second cleanup useEffect");
		};
	}, [count, query]);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((json) => {
				setData(json.products);
				console.log("third fetch");
			});
		return () => {
			//? first run cleanup code when page is reload || when component is unmounted it will run
			console.log("third cleanup");
		};
		//! when you not type ,[] it will render everytime
		//? if you not use enter dependencies it will run only one time when page is load
	}, []);

	const handleCount = () => setCount((count) => count + 1);
	// function handleCount() {
	// 	console.log(firstExample);
	// 	return firstExample++;
	// }

	return (
		<div className="d-flex justify-content-between align-items-start">
			<ul>
				{data.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
			<div className="d-flex flex-column gap-5">
				<Button color="primary" onClick={handleCount}>
					{/* Count {firstExample} */}
					Child Count {count}
				</Button>
				<Button color="primary" onClick={props.handleCont}>
					Parent Count {props.cont}
				</Button>
				<FormGroup>
					<Label for="exampleEmail">Text</Label>
					<Input
						type="text"
						id="exampleEmail"
						className="shadow-none"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</FormGroup>
			</div>
		</div>
	);
};

export default FirstExample;
