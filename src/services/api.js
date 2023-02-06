import axios from "axios";

export const api = axios.create({
	//baseURL: "http://localhost:2020",
	baseURL: "https://test-automation-server.onrender.com",
});

export const createAdminSession = async (email, password) => {
	return api.post("/adminSession", { email, password });
};

export const createUserSession = async (email, password) => {
	return api.post("/userSession", { email, password });
};

export const get = async (id, type) => {
	let url = `/${type}/${id}`;
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
	formData,
	subject_name
) => {
	return api.post(`/subjects/${subjectId}/tasks`, {
		name,
		description,
		inputs,
		baseCode,
		formData,
		subject_name,
	});
};

export const sendFile = async (formData) => {
	return api.post("/files", formData);
};

export const sendUserFile = async (formData) => {
	return api.post("/filesUser", formData);
};
export const getSubjectsUser = async (name) => {
	return api.get(`/users/subjects/${name}`);
};
export const showSubjects = async (id) => {
	return api.get(`/users/showSubjects/${id}`);
};
export const deleteTask = (subject_id, id) => {
	let url = `/subjects/${subject_id}/tasks/${id}`;
	return api.delete(url);
};
export const createUserFolder = async (subject_id, task_id, id) => {
	let url = `/subjects/${subject_id}/tasks/${task_id}/${id}`;
	return api.get(url);
};
export const getUserResult = async (user_id, task_id) => {
	let url = `/user/${user_id}/task/${task_id}/result`;
	return api.get(url);
};
export const getUsersResult = async (task_id) => {
	let url = `/task/${task_id}/result`;
	return api.get(url);
};
export const getUser = async (user_id) => {
	let url = `user/${user_id}`;
	return api.get(url);
};
export const createResult = async (task_id, user_id) => {
	let url = `user/${user_id}/task/${task_id}/result`;
	return api.post(url);
};
export const deleteResult = async (task_id, user_id, id) => {
	let url = `user/${user_id}/task/${task_id}/result/${id}`;
	return api.delete(url);
};
