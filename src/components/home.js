import React from "react";
import HttpService from "../services/http-service";
import { Link } from "react-router-dom";

export default class home extends React.Component {
	constructor(props) {
		super(props);

		this.retrievePosts = this.retrievePosts.bind(this);

		this.state = {
			posts: [],
			loaded: false,
			currentPost: null,
			currentIndex: -1,
			placeholder: "Loading",
		};
	}

	componentDidMount() {
		this.retrievePosts();
	}

	retrievePosts() {
		HttpService.getAll()
			.then((response) => {
				this.setState(() => {
					return {
						posts: response.data.results,
						loaded: true,
					};
				});
			})
			.catch((e) => {
				console.log(e);
			});
	}

	refreshList() {
		this.retrievePosts();
		this.setState({
			currentPost: null,
			currentIndex: -1,
		});
	}

	setActivePost(tutorial, index) {
		this.setState({
			currentPost: tutorial,
			currentIndex: index,
		});
	}

	removeAllPosts() {
		HttpService.deleteAll()
			.then((response) => {
				console.log(response.data);
				this.refreshList();
			})
			.catch((e) => {
				console.log(e);
			});
	}

	render() {
		const { posts, currentIndex, currentPost } = this.state;
		return (
			<div>
				<div className="bg-gray-200">
					<div className="w-3/4 pl-6 mx-auto h-20 flex">
						<div className="w-full flex items-center">
							<ul className="w-3/4 flex justify-between items-center">
								<li className="hover:text-gray-600">
									<a href="">Latest Posts</a>
								</li>
								<li>
									<a className="hover:text-gray-600" href="#">
										Technology
									</a>
								</li>
								<li>
									<a className="hover:text-gray-600" href="#">
										Business
									</a>
								</li>
								<li>
									<a className="hover:text-gray-600" href="#">
										Enviromnent
									</a>
								</li>
								<li>
									<a className="hover:text-gray-600" href="#">
										Culture
									</a>
								</li>
							</ul>
							<div className="w-1/4 pl-16 flex justify-center">
								<h3>
									<a href="#" className="bg-gray-400 px-4 py-3 hover:bg-gray-300">
										Add Post
									</a>
								</h3>
							</div>
						</div>
					</div>
				</div>

				<div className="w-3/4 pl-6 mx-auto mt-10 flex">
					<div className="w-full flex flex-wrap">
						{posts &&
							posts.map((post, index) => (
								<div key={index} className="w-1/4 mb-8 px-2">
									<Link to={"/posts/" + post.id}>
										<div className="bg-gray-200 border border-gray-200">
											<div
												// style="background-image: url('./logo.svg');"
												className="h-64 w-full bg-cover"
											></div>
											<div className="p-6">
												<div className="w-full">
													<div className="w-2/4 flex">
														<h4 className="h4 bg-gray-400 px-2 py-1">
															Technology
														</h4>
													</div>
													<div className="w-2/4">
														<span>{post.title}</span>
													</div>
												</div>
											</div>
										</div>
									</Link>
								</div>
							))}
					</div>
				</div>
			</div>
		);
	}
}
