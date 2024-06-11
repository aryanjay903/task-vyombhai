import { useRef, useImperativeHandle, forwardRef } from "react";

const MyInputImperative = forwardRef((props, ref) => {
	const inputRef = useRef();
	useImperativeHandle(ref, () => ({
		hello: () => {
			inputRef.current.value = "hello";
		},
		focus: () => {
			inputRef.current.focus();
		},
	}));
	return <input {...props} ref={inputRef} />;
});

const MyInput = forwardRef((props, ref) => {
	return <input {...props} ref={ref} />;
});

const FirstExample = () => {
	return (
		<div className="container my-3">
			<WithoutUse />
			<Withuse />
		</div>
	);
};

const WithoutUse = () => {
	const inputRef = useRef();
	const handleFocus = () => {
		inputRef.current.value = "hello";
		inputRef.current.focus();
	};
	return (
		<div>
			<h3>Without useImperativeHandle</h3>
			<div>
				<MyInput ref={inputRef} />
				<button onClick={handleFocus} className="btn btn-primary">
					Focus
				</button>
			</div>
		</div>
	);
};
const Withuse = () => {
	const inputRef = useRef();
	const handleFocus = () => {
		inputRef.current.hello();
		inputRef.current.focus();
	};
	return (
		<div>
			<div>
				<h3>
					value & focus when click on focus button using useImperativeHandle
					hook
				</h3>
			</div>
			<div>
				<MyInputImperative ref={inputRef} />
				<button onClick={handleFocus} className="btn btn-primary">
					Focus
				</button>
			</div>
		</div>
	);
};

export default FirstExample;
