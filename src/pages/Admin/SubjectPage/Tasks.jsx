import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const Tasks = ({ tasks_, subjectId }) => {
	const navigate = useNavigate();
	return (
		<div className="tasks">
			<h2 className={styles.title}>Tasks: </h2>
			{tasks_.map((task) => (
				<button
					className={styles.item}
					key={task._id}
					onClick={() => {
						navigate("/subject/task", {
							state: {
								task_id: task._id,
								task_name: task.name,
								subject_id: subjectId,
							},
						});
					}}
				>
					<div className="info">
						<div className="task">{task.name}</div>
					</div>
				</button>
			))}
		</div>
	);
};
export default Tasks;
