// todo: Skipping re-rendering when props are unchanged
import React, { useCallback } from "react";
import { Input, Table } from "reactstrap";
//! when i not use memo() on input component when props are changed or not it will render
//? when i use memo() on input component when props are changed it will render other wise it will not render
import InputComponent from "../../InputComponent";
import { CardTitle } from "reactstrap";

const EunnelComponent = () => {
	console.log("EunnelComponent");
	const [firstTextField, setFirstTextField] = React.useState("SubComponent 1");
	const [secondTextField, setSecondTextField] =
		React.useState("SubComponent 2");

	//! using or not using useCallback hook same output(every component re-render when i click on button) without memorize(memo())
	//? using or not using useCallback hook same output(single component render when i click on button) with memo()
	const handleChange = (e) => {
		const { value } = e.target;
		setFirstTextField(value);
	};
	// const handleChange = useCallback((e) => {
	// 	const { value } = e.target;
	// 	setFirstTextField(value);
	// }, []);
	const handleChange2 = useCallback((e) => {
		const { value } = e.target;
		setSecondTextField(value);
	}, []);
	return (
		<div>
			<CardTitle tag="h5">SecondExample</CardTitle>
			<Table striped bordered responsive hover>
				<tbody>
					<tr className="text-center">
						<th>EunnelComponent 1</th>
						<td>
							<Input value={firstTextField} onChange={handleChange} />
						</td>
					</tr>
					<tr className="text-center">
						<th>EunnelComponent 2</th>
						<td>
							<InputComponent
								textField={secondTextField}
								onChange={handleChange2}
							/>
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default EunnelComponent;
