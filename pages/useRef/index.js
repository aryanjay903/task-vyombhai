import { Container } from "reactstrap";
import Link from "next/link";
const UseEffect = () => {
	return (
		<Container className="mt-3 d-flex gap-3">
			<Link href="useRef/example/FirstExample" className="btn btn-primary">
				FirstExample
			</Link>
			<Link href="useRef/example/SecondExample" className="btn btn-primary">
				SecondExample
			</Link>
		</Container>
	);
};

export default UseEffect;
