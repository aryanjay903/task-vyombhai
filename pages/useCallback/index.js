import { Container } from "reactstrap";
import Link from "next/link";
const UseEffect = () => {
	return (
		<Container className="mt-3 d-flex gap-3">
			<Link href="useCallback/example/FirstExample" className="btn btn-primary">
				FirstExample
			</Link>
			<Link
				href="useCallback/example/SecondExample"
				className="btn btn-primary"
			>
				SecondExample
			</Link>
			<Link href="useCallback/example/ThirdExample" className="btn btn-primary">
				ThirdExample
			</Link>
			<Link
				href="useCallback/example/FourthExample"
				className="btn btn-primary"
			>
				FourthExample
			</Link>
			<Link href="useCallback/example/FifthExample" className="btn btn-primary">
				FifthExample
			</Link>
		</Container>
	);
};

export default UseEffect;
