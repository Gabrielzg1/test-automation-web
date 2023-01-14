import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/Admin/auth";
import { AuthContextUser } from "../../../contexts/User/auth";
import {
	deleteTask,
	getOutputs,
	getTask,
	updateOutputs,
} from "../../../services/api";
import Loading from "../../Components/Loading";
import "./styles.css";

const AdminTaskPage = () => {
	const navigate = useNavigate();
	const { logout, admin } = useContext(AuthContext);
	const { user } = useContext(AuthContextUser);
	const { state } = useLocation();
	const { task_id, task_name, subject_id } = state;
	const [loading, setLoading] = useState(false);

	const [description, setdescription] = useState("");
	const [inputs, setInputs] = useState([]);
	const [baseCode, setBaseCode] = useState("");
	const [output, setOutput] = useState([]);

	const handleDelete = async () => {
		try {
			await deleteTask(subject_id, task_id);
			navigate("/admin/home");
		} catch (err) {
			console.log(err);
		}
	};

	const handleTask = async () => {
		try {
			setLoading(true);
			await getOutputs(subject_id, task_id);
			await updateOutputs(subject_id, task_id);
			const response = await getTask(subject_id, task_id);
			setdescription(response.data.description);
			setInputs(response.data.inputs);
			setBaseCode(response.data.baseCode);
			setOutput(response.data.outputs);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
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

				<div>
					<button onClick={handleDelete}>Delete Task</button>
				</div>
				<div>
					<button
						onClick={() =>
							navigate("/admin/task/result", { state: { taskId: task_id } })
						}
					>
						Ver resultados
					</button>
				</div>
			</article>
		</div>
	);
};

export default AdminTaskPage;
