import FirstExample from "@/components/example/usememo/FirstExample";
import SecondExample from "@/components/example/usememo/SecondExample";
import ThirdExample from "@/components/example/usememo/ThirdExample";
import FourthExample from "@/components/example/usememo/FourthExample";
import { Container } from "reactstrap";

const Usememo = () => {
	return (
		<Container className="mt-3">
			{/* <FirstExample /> */}
			{/* <SecondExample /> */}
			{/* <ThirdExample /> */}
			<FourthExample />
		</Container>
	);
};
export default Usememo;
