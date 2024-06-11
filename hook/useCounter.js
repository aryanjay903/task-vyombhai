import { useDebugValue, useState } from "react";

const App = (value) => {
	const [count, setCount] = useState(value);
	// useDebugValue(count);
	useDebugValue(count, (count) => (count % 2 === 0 ? "even" : "odd"));
	return [count, setCount];
};

export default App;
