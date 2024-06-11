import { useSyncExternalStore, useState, useRef } from "react";
import { Button, Container } from "reactstrap";

const FirstExample = () => {
	const [count, setCount] = useState(0);
	const getsnapshot = () => {
		return count;
	};
	function getServerSnapshot() {
		return true; // Always show "Online" for server-generated HTML
	}
	const subscribe = () => {
		inputRef.current.addEventListener("onclick", () => {
			setCount(count + 1);
		});
	};

	const value = useSyncExternalStore(subscribe, getsnapshot, getServerSnapshot);
	return (
		<Container className="mt-3">
			<Button color="primary" ref={inputRef}>
				increment {value}
			</Button>
		</Container>
	);
};

export default FirstExample;
