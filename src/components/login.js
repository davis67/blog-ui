import React from "react";
import axiosInstance from "./../axiosApi";

export default class post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	async handleSubmit(event) {
		event.preventDefault();
		try {
			const response = await axiosInstance.post("/auth/login/", {
				email: this.state.email,
				password: this.state.password,
			});

			console.log(response.data);
			axiosInstance.defaults.headers["Authorization"] = "JWT " + response.data.tokens.access;
			localStorage.setItem("access_token", response.data.tokens.access);
			localStorage.setItem("refresh_token", response.data.tokens.refresh);
			console.log("response", response);
			// history.push("/");
			return response;
		} catch (error) {
			// console.log("error", error);
			throw error;
		}
	}

	render() {
		return (
			<div class="w-3/4 mx-auto container">
				<h1 class="text-2xl my-10">Login</h1>

				<form onSubmit={this.handleSubmit}>
					<div>
						<div className="mt-8 pt-8 sm:mt-5 sm:pt-10">
							<div className="space-x-8 ">
								<div className="mt-1 max-w-2xl text-lg leading-5 text-gray-900">
									Personal Information
								</div>
								<div className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
									Use a permanent address where you can receive mail.
								</div>
							</div>
							<div className="mt-6 sm:mt-5">
								<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
									<label
										htmlFor="email"
										className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
									>
										Email address
									</label>
									<div className="mt-1 sm:mt-0 sm:col-span-2">
										<div className="max-w-lg rounded-md shadow-sm">
											<input
												id="email"
												name="email"
												type="email"
												value={this.state.email}
												onChange={this.handleChange}
												className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											/>
										</div>
									</div>
								</div>

								<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
									<label
										htmlFor="Password"
										className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
									>
										Password
									</label>
									<div className="mt-1 sm:mt-0 sm:col-span-2">
										<div className="max-w-xs rounded-md shadow-sm">
											<input
												id="Password"
												type="password"
												name="password"
												value={this.state.password}
												onChange={this.handleChange}
												className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-8 border-t border-gray-200 pt-5">
						<div className="flex justify-end">
							<span className="ml-3 inline-flex rounded-md shadow-sm">
								<button
									type="submit"
									className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
								>
									Login
								</button>
							</span>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
