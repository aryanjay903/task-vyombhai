import { forwardRef, useRef, useEffect } from "react";

//! Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
const MyInput = forwardRef((props, ref) => {
	return <input {...props} ref={ref} />;
});

export default function Form() {
	//! If you show {ref.current} in the JSX, the number won’t update on click. This is because setting ref.current does not trigger a re-render. Information that’s used for rendering should be state instead.
	const inputRef = useRef();
	useEffect(() => {
		//?  DOM manipulations methods can be used using useRef()
		// inputRef.current.addEventListener("mouseenter", (event) => {
		// 	console.log("enter");
		// });
		// inputRef.current.addEventListener("mouseleave", (event) => {
		// 	console.log("leave");
		// });
		// inputRef.current.focus();
	}, []);

	return (
		<div className="d-flex flex-column">
			<label htmlFor="first">first</label>
			<MyInput id="first" ref={inputRef} />
			<label htmlFor="second">second</label>
			<input type="text" id="second" ref={inputRef} />
		</div>
	);
}
