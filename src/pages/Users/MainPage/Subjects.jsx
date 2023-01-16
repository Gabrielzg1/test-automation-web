import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSubjectsUser } from "../../../services/api";

const Subjects = ({ subjects_ }) => {
	const [subjects, setSubjects] = useState([]);
	const navigate = useNavigate();

	return (
		<div className="subjects">
			<h2>Subjects: </h2>
			{subjects_.map((subject, i) => {
				return (
					<button
						className="item"
						key={subject._id}
						onClick={() => {
							navigate("/user/subject", {
								state: { subject_id: subject._id, subject_name: subject.name },
							});
						}}
					>
						<div className="info">
							<div className="subject">{subject.name}</div>
						</div>
					</button>
				);
			})}
		</div>
	);
};
export default Subjects;
