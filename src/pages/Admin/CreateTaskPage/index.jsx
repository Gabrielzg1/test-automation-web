import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createTask, sendFile } from "../../../services/api";

import styles from "./createstyle.module.css";

const CreateTaskPage = () => {
	const { state } = useLocation();
	const { subject_id, subject_name } = state;
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [description, setDescription] = useState(" ");

	const [inputs, setInputs] = useState([]);
	const [input1, setInput1] = useState(" ");
	const [input2, setInput2] = useState(" ");
	const [input3, setInput3] = useState(" ");
	const [input4, setInput4] = useState(" ");
	const [input5, setInput5] = useState(" ");
	const [input6, setInput6] = useState(" ");
	const [input7, setInput7] = useState(" ");
	const [input8, setInput8] = useState(" ");
	const [input9, setInput9] = useState(" ");
	const [input10, setInput10] = useState(" ");

	const [file, setFile] = useState("");
	const [baseCode, setBaseCode] = useState("");

	const hadleNewTask = async () => {
		try {
			handleInputs();
			await createTask(
				subject_id,
				name,
				description,
				inputs,
				baseCode,
				subject_name
			);
			await handleFile();
			navigate("/admin/home");
		} catch (err) {
			console.error(err);
		}
	};
	const handleInputs = () => {
		inputs.push(
			input1,
			input2,
			input3,
			input4,
			input5,
			input6,
			input7,
			input8,
			input9,
			input10
		);
		console.log(inputs);
	};

	const handleFile = async () => {
		const formData = new FormData();
		formData.append("name", name);
		formData.append("subject_name", subject_name);
		formData.append("file", file);
		console.log(formData);
		await sendFile(formData);
	};

	const loadData = async () => {
		try {
			console.log(subject_name);
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
				<br />
				<label>
					<b>Inputs:</b>{" "}
				</label>

				<br />
				<label htmlFor="number">Input 1</label>
				<textarea
					className={styles.input}
					type="text"
					onChange={(e) => setInput1(e.target.value)}
				></textarea>
				<br />

				<label htmlFor="number">Input 2</label>
				<textarea
					className="input"
					type="text"
					onChange={(e) => setInput2(e.target.value)}
				></textarea>
				<br />

				<label htmlFor="number">Input 3</label>
				<textarea
					className="input"
					type="text"
					onChange={(e) => setInput3(e.target.value)}
				></textarea>
				<br />

				<label htmlFor="number">Input 4</label>
				<textarea
					className="input"
					type="text"
					onChange={(e) => setInput4(e.target.value)}
				></textarea>
				<br />

				<label htmlFor="number">Input 5</label>
				<textarea
					className="input"
					type="text"
					onChange={(e) => setInput5(e.target.value)}
				></textarea>
				<br />

				<label htmlFor="number">Input 6</label>
				<textarea
					className="input"
					type="text"
					onChange={(e) => setInput6(e.target.value)}
				></textarea>
				<br />

				<label htmlFor="number">Input 7</label>
				<textarea
					className="input"
					type="text"
					onChange={(e) => setInput7(e.target.value)}
				></textarea>
				<br />

				<label htmlFor="number">Input 8</label>
				<textarea
					className="input"
					type="text"
					onChange={(e) => setInput8(e.target.value)}
				></textarea>
				<br />

				<label htmlFor="number">Input 9</label>
				<textarea
					className="input"
					type="text"
					onChange={(e) => setInput9(e.target.value)}
				></textarea>
				<br />

				<label htmlFor="number">Input 10</label>
				<textarea
					className="inputs"
					type="text"
					onChange={(e) => setInput10(e.target.value)}
				></textarea>
				<br />
				<br />
				<div className="field">
					<label htmlFor="description">Código Base:</label>
					<input
						type="text"
						name="baseCode"
						id="baseCode"
						value={baseCode}
						onChange={(e) => setBaseCode(e.target.value)}
					/>
				</div>
				<br />
				<br />
				<div className="field">
					<label htmlFor="description">Envie aqui o arquivo Base:</label>
					<br />
					<input
						type="file"
						name="file"
						id="file"
						onChange={(e) => {
							setFile(e.target.files[0]);
							console.log(file);
						}}
					/>
				</div>
				<div className="actions">
					<button disabled={!file} onClick={hadleNewTask}>
						Criar
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateTaskPage;
