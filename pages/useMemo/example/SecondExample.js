import { useMemo } from "react";

const SecondExample = () => {
	const MyComponent = useMemo(() => {
		// we are don't use useState hook inside useMemo hook
		// const [input, setInput] = useState("");
		// return <input value={input} onChange={(e) => setInput(e.target.text)} />;
		return <div></div>;
	},[]);

	// return <div></div>;
	return MyComponent;
};

export default SecondExample;
