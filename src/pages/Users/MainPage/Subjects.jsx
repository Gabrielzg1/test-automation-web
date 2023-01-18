import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSubjectsUser } from "../../../services/api";
import styles from "./mainuserstyle.module.css";

const Subjects = ({ subjects_ }) => {
	const navigate = useNavigate();
	return (
		<div className={styles.box}>
			<h2 id={styles.title_subjects}>Subjects: </h2>
			{subjects_.map((subject, i) => {
				return (
					<button
						className={styles.item}
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
