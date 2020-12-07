import React from "react";

export default class profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "",
		};
	}

	render() {
		return (
			<div className="w-3/4  pl-6 mx-auto mt-10 flex">
				<p>profile</p>
			</div>
		);
	}
}
