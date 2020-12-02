import React from "react";
import axiosInstance from "./../axiosApi";

export default class signup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			email: "",
			gender: "",
			photo: "",
			confirm_password: "",
			password: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		try {
			const response = axiosInstance.post("/auth/register/", {
				username: this.state.username,
				email: this.state.email,
				password: this.state.password,
			});
		} catch (error) {
			console.log("error", error);
		}
	}

	render() {
		return (
			<div className="w-3/4 mx-auto">
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
								<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
									<label
										htmlFor="username"
										className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
									>
										Username
									</label>
									<div className="mt-1 sm:mt-0 sm:col-span-2">
										<div className="max-w-xs rounded-md shadow-sm">
											<input
												id="username"
												name="username"
												value={this.state.username}
												onChange={this.handleChange}
												className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											/>
										</div>
									</div>
								</div>

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
										htmlFor="gender"
										className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
									>
										gender
									</label>
									<div className="mt-1 sm:mt-0 sm:col-span-2">
										<div className="max-w-xs rounded-md shadow-sm">
											<select
												id="gender"
												name="gender"
												onChange={this.handleChange}
												className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											>
												<option value="male">Male</option>
												<option value="female">Female</option>
											</select>
										</div>
									</div>
								</div>

								<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
									<label
										htmlFor="photo"
										className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
									>
										Avatar
									</label>
									<div className="mt-1 sm:mt-0 sm:col-span-2">
										<div className="max-w-lg rounded-md shadow-sm">
											<input
												id="photo"
												type="file"
												name="photo"
												className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											/>
										</div>
									</div>
								</div>

								<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
									<label
										htmlFor="confirm_password"
										className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
									>
										Confirm Password
									</label>
									<div className="mt-1 sm:mt-0 sm:col-span-2">
										<div className="max-w-xs rounded-md shadow-sm">
											<input
												id="confirm_password"
												type="password"
												name="confirm_password"
												value={this.state.confirm_password}
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
							<span className="inline-flex rounded-md shadow-sm">
								<button
									type="button"
									className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
								>
									Cancel
								</button>
							</span>
							<span className="ml-3 inline-flex rounded-md shadow-sm">
								<button
									type="submit"
									className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
								>
									Save
								</button>
							</span>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
