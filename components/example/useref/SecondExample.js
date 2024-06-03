import { useState, useEffect, useRef } from "react";

const SecondExample = () => {
	const [count, setCount] = useState(0);
	//! If you show {ref.current} in the JSX, the number won’t update on click. This is because setting ref.current does not trigger a re-render. Information that’s used for rendering should be state instead.
	const prevCountRef = useRef();

	useEffect(() => {
		prevCountRef.current = count;
	}, [count]);

	return (
		<div>
			<p>
				Current count: {count} - Previous count: {prevCountRef.current}
			</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default SecondExample;
