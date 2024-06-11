import useCounter from "@/hook/useCounter";
import { Button } from "reactstrap";

const FirstExample = () => {
	const [count, setCount] = useCounter(6);
	return (
		<div className="container my-3">
			<div>
				<Button color="primary" onClick={() => setCount(count + 1)}>
					Increment {count}
				</Button>
			</div>
		</div>
	);
};

export default FirstExample;
