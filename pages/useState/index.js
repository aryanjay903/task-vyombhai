import { Container } from "reactstrap";
import Link from "next/link";
const UseEffect = () => {
	return (
		<Container className="mt-3 d-flex gap-3">
			<Link href="useState/example/FirstExample" className="btn btn-primary">
				FirstExample
			</Link>
		</Container>
	);
};

export default UseEffect;
