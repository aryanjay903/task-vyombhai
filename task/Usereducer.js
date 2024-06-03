import FirstExample from "@/components/example/usereducer/FirstExample";
import SecondExample from "@/components/example/usereducer/SecondExample";
import ThirdExample from "@/components/example/usereducer/ThirdExample";
import FourthWithContext from "@/components/example/usereducer/FourthWithContext";

const Usestate = () => {
	return (
		<div className="d-flex flex-column gap-4">
			{/* <FirstExample />
			<SecondExample />
			<ThirdExample /> */}
			<FourthWithContext />
		</div>
	);
};
export default Usestate;
