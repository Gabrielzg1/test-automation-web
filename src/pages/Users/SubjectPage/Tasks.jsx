import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./usersubjectstyle.module.css";

const Tasks = ({ tasks_, subjectId, subjectName }) => {
	const navigate = useNavigate();
	return (
		<div className="tasks">
			<h2>Tasks: </h2>
			<ul>
				{tasks_.map((task) => (
					<li key={task._id}>
						<button
							className={styles.item}
							onClick={() => {
								navigate("/user/subject/task", {
									state: {
										task_id: task._id,
										task_name: task.name,
										subject_id: subjectId,
										subject_name: subjectName,
									},
								});
							}}
						>
							<div className="info">
								<div className="task">{task.name}</div>
							</div>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
export default Tasks;
