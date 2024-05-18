import React, { useCallback } from "react";
import { Table } from "reactstrap";
import InputComponent from "./InputComponent";

const ExperienceComponent = () => {
	console.log("ExperienceComponent");
	const [textField, setTextField] = React.useState("SubComponent");
	const handleChange = (e) => {
		const { value } = e.target;
		setTextField(value);
	};

	return (
		<div>
			<Table striped bordered responsive hover>
				<tbody>
					<tr className="text-center">
						<th>ExperienceComponent</th>
						<td>
							<InputComponent value={textField} onChange={handleChange} />
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default ExperienceComponent;
