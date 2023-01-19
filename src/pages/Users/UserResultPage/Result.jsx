import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./resultUserStyle.module.css";

const Result = ({ result }) => {
	return (
		<div className={styles.checklist}>
			<ul className={styles.ul}>
				{result.map((test, i) => (
					<li key={i} className={styles.item}>
						<h3 className={styles.subtitle}>Teste {i + 1}:</h3>
						{test === 1 && <label className={styles.approved}>Passou</label>}
						{test === 0 && (
							<label className={styles.unapproved}>Reprovou</label>
						)}
						{test === 2 && (
							<label className={styles.error}>
								Erro nas saidas - reenvie o arquivo
							</label>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
export default Result;
