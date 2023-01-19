import React, { useContext, useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContextUser } from "../../../contexts/User/auth";
import {
	createResult,
	createUserFolder,
	deleteResult,
	getTask,
	getUserResult,
	sendUserFile,
} from "../../../services/api";
import Loading from "../../Components/Loading";
import styles from "./taskstyle.module.css";

const UserTaskPage = () => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContextUser);
	const { state } = useLocation();
	const { task_id, task_name, subject_id, subject_name } = state;
	const [loading, setLoading] = useState(false);
	const [file, setFile] = useState("");
	const [status, setStatus] = useState(0);

	const [description, setdescription] = useState("");
	const [inputs, setInputs] = useState([]);
	const [baseCode, setBaseCode] = useState("");
	const [output, setOutput] = useState([]);
	const [exist, setExist] = useState(false);

	const handleTask = async () => {
		try {
			setLoading(true);
			const response = await getTask(subject_id, task_id);
			setdescription(response.data.description);
			setInputs(response.data.inputs);
			setBaseCode(response.data.baseCode);
			setOutput(response.data.outputs);
			setLoading(false);
			const result = await getUserResult(user.id, task_id);
			console.log(result.data);
			if (result.data) {
				setExist(true);
			}
		} catch (error) {
			console.log(error);
		}
	};
	if (!user) {
		<Navigate to="/"></Navigate>;
	}

	const handleFile = async () => {
		try {
			const formData = new FormData();
			formData.append("subject_name", subject_name);
			formData.append("task_name", task_name);
			formData.append("id", user.id);
			formData.append("file", file);
			const response = await createUserFolder(subject_id, task_id, user.id);
			sendUserFile(formData);
			setStatus(response.status);
			await createResult(task_id, user.id);
			setTimeout(() => {
				setExist(true);
			}, 500);
		} catch (error) {
			console.log(error);
			setStatus(0);
		}
	};

	const back = () => {
		navigate("/user/subject", {
			state: { subject_id, subject_name },
		});
	};

	const loadData = async () => {
		try {
			handleTask();
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		(async () => await loadData())();
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<div id="main">
			<div className={styles.nav}>
				<button className={styles.button} onClick={back}>
					Voltar
				</button>
			</div>
			<article className="markdown-body">
				<h1>
					<a id="user-content-números-da-mega-sena" aria-hidden="true">
						<span aria-hidden="true" className="octicon octicon-link"></span>
					</a>
					{task_name}
				</h1>
				<h2>
					<a id="user-content-código-base"></a>
					Descrição
				</h2>
				<p>{description}</p>

				<p>Exemplos de entradas e saídas esperadas pelo seu programa:</p>
				<h3>
					<a id="user-content-teste-01" className="anchor" aria-hidden="true">
						<span aria-hidden="true" className="octicon octicon-link"></span>
					</a>
					Teste 01
				</h3>
				<p>
					<a>Entrada</a>
				</p>
				<pre>
					<code>{inputs[0]}</code>
				</pre>
				<p>
					<a>Saída</a>
				</p>
				<pre>
					<code>{output[0]}</code>
				</pre>
				<h3>
					<a id="user-content-teste-02" className="anchor" aria-hidden="true">
						<span aria-hidden="true" className="octicon octicon-link"></span>
					</a>
					Teste 02
				</h3>
				<p>
					<a>Entrada</a>
				</p>
				<pre>
					<code>{inputs[1]}</code>
				</pre>
				<p>
					<a>Saída</a>
				</p>
				<pre>
					<code>{output[1]}</code>
				</pre>
				<h3>
					<a id="user-content-teste-03" className="anchor" aria-hidden="true">
						<span aria-hidden="true" className="octicon octicon-link"></span>
					</a>
					Teste 03
				</h3>
				<p>
					<a>Entrada</a>
				</p>
				<pre>
					<code>{inputs[2]}</code>
				</pre>
				<p>
					<a>Saída</a>
				</p>
				<pre>
					<code>{output[2]}</code>
				</pre>
				<h3>
					<a id="user-content-teste-02" className="anchor" aria-hidden="true">
						<span aria-hidden="true" className="octicon octicon-link"></span>
					</a>
					Teste 04
				</h3>
				<p>
					<a>Entrada</a>
				</p>
				<pre>
					<code>{inputs[3]}</code>
				</pre>
				<p>
					<a>Saída</a>
				</p>
				<pre>
					<code>{output[3]}</code>
				</pre>
				<h3>
					<a id="user-content-teste-02" className="anchor" aria-hidden="true">
						<span aria-hidden="true" className="octicon octicon-link"></span>
					</a>
					Teste 05
				</h3>
				<p>
					<a>Entrada</a>
				</p>
				<pre>
					<code>{inputs[4]}</code>
				</pre>
				<p>
					<a>Saída</a>
				</p>
				<pre>
					<code>{output[4]}</code>
				</pre>
				<h2>
					<a
						id="user-content-código-base"
						className="anchor"
						aria-hidden="true"
					>
						<span aria-hidden="true" className="octicon octicon-link"></span>
					</a>
					Código Base
				</h2>
				<p>Siga está formatação para a validar</p>
				<pre>
					<code>{baseCode}</code>
				</pre>
				<h2>
					<a
						id="user-content-orientações"
						className="anchor"
						aria-hidden="true"
					>
						<span aria-hidden="true" className="octicon octicon-link"></span>
					</a>
					Orientações
				</h2>
				<ul>
					<li>
						O laboratório é composto de 5 testes abertos e 5 testes fechados.
					</li>
					{/*<li>O limite máximo será de 5 submissões.</li>
					<li>Serão considerados apenas os resultados da última submissão.</li>*/}
				</ul>
				<h2>
					<a
						id="user-content-código-base"
						className="anchor"
						aria-hidden="true"
					>
						<span aria-hidden="true" className="octicon octicon-link"></span>
					</a>
					Send Task
				</h2>
				<div className={styles.field}>
					<div className={styles.file}>
						<label>Envie aqui o arquivo:</label>
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

					<button
						disabled={!file || status === 200 || exist}
						onClick={() => handleFile()}
						className={styles.send}
					>
						Enviar
					</button>
					<button
						className={styles.result}
						disabled={!exist}
						onClick={() => {
							navigate("/user/result", {
								state: { taskId: task_id, task_name, subject_id, subject_name },
							});
						}}
					>
						Ver resultado
					</button>
					{exist && (
						<div className={styles.errorField}>
							<span>Arquivo já enviado - clique em "Ver resultado"</span>
						</div>
					)}
				</div>
			</article>
		</div>
	);
};

export default UserTaskPage;
