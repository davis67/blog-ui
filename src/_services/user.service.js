// import config from "config";
import { handleResponse } from "../_helpers/handle-response";
import { authHeader } from "../_helpers/auth-header";

export const userService = {
	getAll,
};

function getAll() {
	const requestOptions = { method: "GET", headers: authHeader() };
	return fetch(`/users`, requestOptions).then(handleResponse);
}
