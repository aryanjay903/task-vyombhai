import { Container } from "reactstrap";
import Link from "next/link";
const UseEffect = () => {
	return (
		<Container className="mt-3 d-flex gap-3">
			<Link
				href="useLayoutEffect/example/FirstExample"
				className="btn btn-primary"
			>
				FirstExample
			</Link>
			<Link
				href="useLayoutEffect/example/SecondExample"
				className="btn btn-primary"
			>
				SecondExample
			</Link>
			<Link
				href="useLayoutEffect/example/ThirdExample"
				className="btn btn-primary"
			>
				ThirdExample
			</Link>
		</Container>
	);
};

export default UseEffect;
