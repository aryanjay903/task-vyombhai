import { forwardRef, useRef, useEffect } from "react";

//! Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
const MyInputForwardRef = forwardRef((props, ref) => {
	return <input {...props} ref={ref} />;
});

const MyInput = (props) => {
	return <input {...props} />;
};

export default function Form() {
	//! If you show {ref.current} in the JSX, the number won’t update on click. This is because setting ref.current does not trigger a re-render. Information that’s used for rendering should be state instead.
	useEffect(() => {
		//?  DOM manipulations methods can be used using useRef()
		// inputRef.current.addEventListener("mouseenter", (event) => {
		// 	console.log("enter");
		// });
		// inputRef.current.addEventListener("mouseleave", (event) => {
		// 	console.log("leave");
		// });
	}, []);

	return (
		<div
			className="d-flex flex-column container my-3 gap-3
		"
		>
			<WithUseRef />
			<WithoutUseRef />
			{/* <UseForwardRef /> */}
			{/* <WithoutUseForwardRef /> */}
		</div>
	);
}

const WithUseRef = () => {
	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<div>
			<div>
				<label htmlFor="WithUseRef">WithUseRef</label>
				<input
					type="text"
					id="WithUseRef"
					ref={inputRef}
					placeholder="WithUseRef input"
					//? first priority for parent input
				/>
			</div>
		</div>
	);
};

const WithoutUseRef = () => {
	useEffect(() => {
		document.getElementById("WithUseRef").focus();
	}, []);
	return (
		<div>
			<label htmlFor="WithoutUseRef">WithoutUseRef</label>
			<input
				type="text"
				id="WithoutUseRef"
				placeholder="WithoutUseRef input"
				//? first priority for parent input
			/>
		</div>
	);
};
const WithoutUseForwardRef = () => {
	const inputRef = useRef(null);
	useEffect(() => {
		input.current.focus();
	}, []);
	return (
		<div>
			<label htmlFor="WithoutUseForwardRef">WithoutUseForwardRef</label>
			<MyInput
				id="WithoutUseForwardRef"
				placeholder="parent input"
				ref={inputRef}
			/>
		</div>
	);
};

const UseForwardRef = () => {
	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<div>
			<label htmlFor="WithUseRef">WithUseRef</label>
			<MyInputForwardRef
				id="first"
				ref={inputRef}
				placeholder="child input with "
				//! when use useref in parent not displayed in child
			/>
		</div>
	);
};
