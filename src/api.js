// src/api.js

// Base URL of your live backend
const BASE_URL = "https://mern-auth-backend-1-mumv.onrender.com";

// Auth endpoints
export const LOGIN_URL = `${BASE_URL}/api/auth/login`;
export const REGISTER_URL = `${BASE_URL}/api/auth/register`;

// Example: if you have tasks or other APIs
export const GET_TASKS_URL = `${BASE_URL}/api/tasks`;
export const CREATE_TASK_URL = `${BASE_URL}/api/tasks`;
export const DELETE_TASK_URL = (id) => `${BASE_URL}/api/tasks/${id}`;
