import { BehaviorSubject } from "rxjs";

// import config from "config";
import { handleResponse } from "../helpers/handle-response";
import axiosInstance from "./../axiosApi";
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    isAuthenticated: currentUserSubject.value != null,
    get currentUserValue() {
        return currentUserSubject.value;
    },
};

function login(data) {
    return (
        axiosInstance
            .post(`/auth/login/`, data)
            // .then(handleResponse)
            .then((response) => {
                const user = response.data;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("currentUser", JSON.stringify(user));
                currentUserSubject.next(user);

                return user;
            })
    );
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    currentUserSubject.next(null);
}
