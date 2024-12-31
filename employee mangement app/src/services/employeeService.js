import axios from "axios";

const API_URL = "http://localhost:5000/api/employees";

export const fetchEmployees = async () => axios.get(API_URL).then((res) => res.data);
export const createEmployee = async (employee) => axios.post(API_URL, employee);
export const updateEmployee = async (id, employee) => axios.put(`${API_URL}/${id}`, employee);
export const deleteEmployee = async (id) => axios.delete(`${API_URL}/${id}`);
