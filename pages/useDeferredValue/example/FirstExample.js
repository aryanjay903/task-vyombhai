import { useState, useDeferredValue, memo } from "react";
import { Col, Container, Input, Label, Row } from "reactstrap";

const FirstExample = () => {
	return (
		<Container className="mt-3">
			<Row>
				<Col sm="6">
					<WithUseDeferredValue />
				</Col>
				<Col sm="6">
					<WithoutUseDeferredValue />
				</Col>
			</Row>
		</Container>
	);
};

const WithUseDeferredValue = () => {
	const [query, setQuery] = useState("");
	const deferredQuery = useDeferredValue(query);

	return (
		<div>
			<Label>
				With Use Deferred Value
				<Input
					value={query}
					type="text"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</Label>
			<SlowQuery text={deferredQuery} />
		</div>
	);
};
const WithoutUseDeferredValue = () => {
	const [query, setQuery] = useState("");
	return (
		<div>
			<Label>
				Without Use Deferred Value
				<Input
					value={query}
					type="text"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</Label>
			<SlowQuery text={query} />
		</div>
	);
};

const SlowQuery = memo(({ text }) => {
	let items = [];
	for (let i = 0; i < 250; i++) {
		items.push(<SlowItem key={i} text={text} />);
	}
	return <ul className="items">{items}</ul>;
});

const SlowItem = ({ text }) => {
	let startTime = performance.now();
	while (performance.now() - startTime < 1) {
		// Do nothing for 1 ms per item to emulate extremely slow code
	}

	return <li className="item">Text: {text}</li>;
};

export default FirstExample;
