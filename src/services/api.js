import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:2020",
});

export const createAdminSession = async (email, password) => {
	return api.post("/adminSession", { email, password });
};

export const createUserSession = async (email, password) => {
	return api.post("/userSession", { email, password });
};

export const get = async (adminId, type) => {
	let url = `/${type}/${adminId}`;
	return api.get(url);
};
export const getSubjects = async (adminId) => {
	let url = `/admin/${adminId}/subjects`;
	return api.get(url);
};
export const getTasks = async (subjectId) => {
	let url = `/subjects/${subjectId}/tasks`;
	return api.get(url);
};

export const getTask = async (subjectId, taskId) => {
	let url = `/subjects/${subjectId}/tasks/${taskId}`;
	return api.get(url);
};
export const getOutputs = async (subjectId, taskId) => {
	let url = `/subjects/${subjectId}/tasks/${taskId}/generateOutputs`;
	return api.put(url);
};
export const updateOutputs = async (subjectId, taskId) => {
	let url = `/subjects/${subjectId}/tasks/${taskId}`;
	return api.put(url);
};
export const createTask = async (
	subjectId,
	name,
	description,
	inputs,
	baseCode,
	tips
) => {
	return api.post(`/subjects/${subjectId}/tasks`, {
		name,
		description,
		inputs,
		baseCode,
		tips,
	});
};
