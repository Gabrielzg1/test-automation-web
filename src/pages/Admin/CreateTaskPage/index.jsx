import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createTask } from "../../../services/api";

import "./styles.css";

const CreateTaskPage = () => {
	const { state } = useLocation();
	const { subject_id } = state;

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [inputs, setInputs] = useState([]);
	const [baseCode, setBaseCode] = useState("");
	const [tips, setTips] = useState([]);

	const hadleNewTask = async (name) => {
		try {
			await createTask(subject_id, name, description, inputs, baseCode, tips);
		} catch (err) {
			console.error(err);
		}
	};

	const loadData = async () => {
		try {
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		(async () => await loadData())();
	}, []);

	return (
		<div id="create">
			<h1 className="title">Create Task</h1>
			<div className="form">
				<div className="field">
					<label htmlFor="name">Nome:</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="field">
					<label htmlFor="description">Descricao:</label>
					<input
						type="text"
						name="description"
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<div className="actions">
					<button onClick={hadleNewTask}>Entrar</button>
				</div>
			</div>
		</div>
	);
};

export default CreateTaskPage;
