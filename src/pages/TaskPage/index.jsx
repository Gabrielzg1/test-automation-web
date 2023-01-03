import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/Admin/auth";
import { getTask } from "../../services/api";
import Nav from "../Components/Nav";
import "./styles.css";

const TaskPage = () => {
	const { logout, admin } = useContext(AuthContext);
	const { state } = useLocation();
	const { task_id, task_name, subject_id } = state;

	const [description, setdescription] = useState("");
	const [inputs, setInputs] = useState([]);
	const [tips, setTips] = useState([]);
	const [baseCode, setBaseCode] = useState("");

	const handleTask = async () => {
		const response = await getTask(subject_id, task_id);
		setdescription(response.data.description);
		setInputs(response.data.inputs);
		setTips(response.data.tips);
		setBaseCode(response.data.baseCode);
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

	return (
		<div id="main">
			<Nav admin={admin} onLogout={logout} />
			<article className="markdown-body">
				<h2>
					<a
						id="user-content-números-da-mega-sena"
						className="anchor"
						aria-hidden="true"
					>
						<span aria-hidden="true" className="octicon octicon-link"></span>
					</a>
					{task_name}
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
					<code>
						Primeiro número: 01 Terceiro número: 03 Quarto número: 40 Sexto
						número: 42 Lista de possíveis apostas: 01 - 02 - 03 - 40 - 41 - 42
					</code>
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
					<code>
						Primeiro número: 08 Terceiro número: 12 Quarto número: 35 Sexto
						número: 39 Lista de possíveis apostas: 08 - 09 - 12 - 35 - 36 - 39
						08 - 09 - 12 - 35 - 38 - 39 08 - 11 - 12 - 35 - 36 - 39
					</code>
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
					<code>
						Primeiro número: 15 Terceiro número: 25 Quarto número: 40 Sexto
						número: 48 Lista de possíveis apostas: 15 - 16 - 25 - 40 - 41 - 48
						15 - 16 - 25 - 40 - 43 - 48 15 - 16 - 25 - 40 - 47 - 48 15 - 18 - 25
						- 40 - 41 - 48 15 - 18 - 25 - 40 - 45 - 48 15 - 18 - 25 - 40 - 47 -
						48 15 - 20 - 25 - 40 - 43 - 48 15 - 20 - 25 - 40 - 45 - 48 15 - 22 -
						25 - 40 - 41 - 48 15 - 22 - 25 - 40 - 43 - 48 15 - 22 - 25 - 40 - 47
						- 48 15 - 24 - 25 - 40 - 41 - 48 15 - 24 - 25 - 40 - 45 - 48 15 - 24
						- 25 - 40 - 47 - 48
					</code>
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
					<li>{tips[0]}</li>
					<li>{tips[1]}</li>
					<li>{tips[2]}</li>
					<li>{tips[3]}</li>
				</ul>
			</article>
		</div>
	);
};

export default TaskPage;
