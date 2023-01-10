import React from "react";
import { useNavigate } from "react-router-dom";

const Results = ({ results }) => {
    const navigate = useNavigate();
    return (
        <div className="results">
            <h2>Resultados: </h2>
            {results.map((result) => (
                <li className="item"
                    key={res._id}>


                    <div className="info">
                        <div className="task">{task.name}</div>
                    </div>
                </li>
            ))}
        </div>
    );
};
export default Results;
