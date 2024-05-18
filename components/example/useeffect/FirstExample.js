import { useEffect, useState } from "react";
import { Input } from "reactstrap";

const FirstExample = () => {
	const [count, setCount] = useState(0);
	const [query, setQuery] = useState("");
	useEffect(() => {
		setCount(count + 1);
	}, [query]);
	return (
		<div>
			<Input value={query} onChange={(e) => setQuery(e.target.value)} />
		</div>
	);
};

export default FirstExample;
