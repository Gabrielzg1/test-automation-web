import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createTask, sendFile } from "../../../services/api";

import styles from "./createstyle.module.css";

const CreateTaskPage = () => {
	const { state } = useLocation();
	const { subject_id, subject_name } = state;
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const [inputs, setInputs] = useState([]);
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [input3, setInput3] = useState("");
	const [input4, setInput4] = useState("");
	const [input5, setInput5] = useState("");
	const [input6, setInput6] = useState("");
	const [input7, setInput7] = useState("");
	const [input8, setInput8] = useState("");
	const [input9, setInput9] = useState("");
	const [input10, setInput10] = useState("");

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
		<div id={styles.body}>
			<div id={styles.create}>
				<h1 id={styles.title}>Create Task</h1>

				<div>
					<input
						placeholder=" Nome"
						type="text"
						name="name"
						id="name"
						className={styles.name}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div>
					<textarea
						className={styles.description}
						type="text"
						name="description"
						id="description"
						placeholder=" Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
					<textarea
						className={styles.baseCode}
						type="text"
						name="baseCode"
						id="baseCode"
						placeholder=" Código Base"
						value={baseCode}
						onChange={(e) => setBaseCode(e.target.value)}
					></textarea>
				</div>

				<h2 id={styles.inputh2_taskcreator}>Inputs Publicos:</h2>

				<div className={styles.caixa_taskcreator}>
					<div>
						<textarea
							className={styles.input}
							type="text"
							onChange={(e) => setInput1(e.target.value)}
							placeholder=" Input 1"
						></textarea>
					</div>
					<div>
						<textarea
							className={styles.input}
							type="text"
							onChange={(e) => setInput2(e.target.value)}
							placeholder=" Input 2"
						></textarea>
					</div>
					<div>
						<textarea
							className={styles.input}
							type="text"
							onChange={(e) => setInput3(e.target.value)}
							placeholder=" Input 3"
						></textarea>
					</div>

					<div>
						<textarea
							className={styles.input}
							type="text"
							onChange={(e) => setInput4(e.target.value)}
							placeholder=" Input 4"
						></textarea>
					</div>
					<div>
						<textarea
							className={styles.input}
							type="text"
							onChange={(e) => setInput5(e.target.value)}
							placeholder=" Input 5"
						></textarea>
					</div>
				</div>
				<h2 id={styles.inputh2_taskcreator}>Inputs Privados:</h2>

				<div className={styles.caixa_taskcreator}>
					<div>
						<textarea
							className={styles.input}
							type="text"
							onChange={(e) => setInput6(e.target.value)}
							placeholder=" Input 6"
						></textarea>
					</div>
					<div>
						<textarea
							className={styles.input}
							type="text"
							onChange={(e) => setInput7(e.target.value)}
							placeholder=" Input 7"
						></textarea>
					</div>
					<div>
						<textarea
							className={styles.input}
							type="text"
							onChange={(e) => setInput8(e.target.value)}
							placeholder=" Input 8"
						></textarea>
					</div>

					<div>
						<textarea
							className={styles.input}
							type="text"
							onChange={(e) => setInput9(e.target.value)}
							placeholder=" Input 9"
						></textarea>
					</div>
					<div>
						<textarea
							className={styles.input}
							type="text"
							onChange={(e) => setInput10(e.target.value)}
							placeholder=" Input 10"
						></textarea>
					</div>
				</div>

				<div className={styles.escolherarq_taskcreator}>
					<h2 htmlFor="file" id={styles.inputh2_taskcreator}>
						Envie aqui o arquivo Base:
					</h2>
					<input
						type="file"
						name="file"
						id="file"
						onChange={(e) => {
							setFile(e.target.files[0]);
							console.log(file);
						}}
					/>

					<button
						id={styles.criar_taskcreator}
						disabled={!file}
						onClick={hadleNewTask}
					>
						Criar
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateTaskPage;
