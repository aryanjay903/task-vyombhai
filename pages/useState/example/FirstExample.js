import { useState, useRef } from "react";
import { Button } from "reactstrap";

const FirstExample = () => {
	//? State-managed Variables
	const [count, setCount] = useState(0);
	//! State-derived Variables
	//? reset to 0 on render/re-render
	// let count = 0;
	//! If you show {ref.current} in the JSX, the number won’t update on click. This is because setting ref.current does not trigger a re-render. Information that’s used for rendering should be state instead.
	// const countRef = useRef(0);
	const handleClick = () => {
		// count += 1;
		// countRef.current++;
		// console.log(countRef.current);
		setCount((count) => count + 1);
	};
	return (
		<div className="container mt-3">
			<Button onClick={handleClick} color="warning">
				Click : {count}
			</Button>
			{/* <Button onClick={(count += 1)} color="warning">
				Click : {count}
			</Button> */}
			{/* <Button onClick={handleClick} color="warning">
				Click : {countRef.current}
			</Button> */}
		</div>
	);
};

export default FirstExample;
