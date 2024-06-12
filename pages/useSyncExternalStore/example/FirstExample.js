import { useSyncExternalStore } from "react";
import { Button, Container } from "reactstrap";
import countStore from "@/utils/countStore";

const FirstExample = () => {
	const value = useSyncExternalStore(
		countStore.subscribe,
		countStore.getSnapShot,
		countStore.getServerSnapshot
	);
	return (
		<Container className="mt-3">
			<div className="d-flex gap-3">
				<Button color="warning" onClick={() => countStore.increment()}>
					increment
				</Button>
				<h4>{value}</h4>
				<Button color="warning" onClick={() => countStore.decrement()}>
					decrement
				</Button>
			</div>
		</Container>
	);
};

export default FirstExample;
