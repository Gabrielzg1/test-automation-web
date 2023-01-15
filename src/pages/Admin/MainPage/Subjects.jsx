import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const Subjects = ({ subjects_ }) => {
	const navigate = useNavigate();
	return (
		<div className={styles.box_subjects}>
			<h2 id={styles.title_subjects}>Subjects: </h2>
			{subjects_.map((subject) => (
				<button
					className={styles.item}
					key={subject._id}
					onClick={() => {
						navigate("/admin/subject", {
							state: { subject_id: subject._id, subject_name: subject.name },
						});
					}}
				>
					<div className="info">
						<div className="subject">{subject.name}</div>
					</div>
				</button>
			))}
		</div>
	);
};
export default Subjects;
