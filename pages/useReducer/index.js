import { Container } from "reactstrap";
import Link from "next/link";
const UseEffect = () => {
	return (
		<Container className="mt-3 d-flex gap-3">
			<Link href="useReducer/example/FirstExample" className="btn btn-primary">
				FirstExample
			</Link>
			<Link href="useReducer/example/SecondExample" className="btn btn-primary">
				SecondExample
			</Link>
			<Link href="useReducer/example/ThirdExample" className="btn btn-primary">
				ThirdExample
			</Link>
			<Link
				href="useReducer/example/FourthWithContext"
				className="btn btn-primary"
			>
				FourthWithContext
			</Link>
		</Container>
	);
};

export default UseEffect;
