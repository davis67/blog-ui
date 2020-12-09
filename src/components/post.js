import React from "react";
import { Link } from "react-router-dom";
import HttpService from "../services/http-service";
import { authenticationService } from "../services/authentication-service";

export default class post extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPost: null,
			comment_description: "",
			currentUser: authenticationService.currentUserValue,
			isAuthenticated: authenticationService.isAuthenticated,
		};

		this.getPost = this.getPost.bind(this);
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
		this.handleCommentChange = this.handleCommentChange.bind(this);
	}

	componentDidMount() {
		this.getPost(this.props.match.params.id);
	}

	getPost(id) {
		HttpService.get(id)
			.then((response) => {
				console.log(response);
				this.setState(() => {
					return { currentPost: response.data };
				});
				// console.log("current", this.state);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	handleCommentChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleCommentSubmit(event) {
		event.preventDefault();
		let id = this.props.match.params.id;
		let description = this.state.comment_description;

		HttpService.addcomment(id, description)
			.then((response) => {
				// console.log(response);
				// this.setState(() => {
				// 	return { currentPost: response.data };
				// });
				// console.log("current", this.state);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	handleUpdatingOfAComment(comment) {
		let editOrDeleteComment;
		if (
			this.state.isAuthenticated &&
			comment.author.username == this.state.currentUser.username
		) {
			editOrDeleteComment = (
				<div className="my-4">
					<a href="" className="bg-gray-400 px-4 py-3 hover:bg-gray-300">
						Edit
					</a>
					<a href="" className="bg-gray-400 px-4 py-3 hover:bg-gray-300">
						Delete
					</a>
				</div>
			);
		}

		return editOrDeleteComment;
	}

	render() {
		const { currentPost, currentUser, isAuthenticated } = this.state;
		console.log(currentPost);
		let handleEditingOfAPost, handlePublishingOfAPost, handleCommentingOfAPost;

		if (
			currentPost &&
			currentUser &&
			currentPost.author &&
			currentPost.author.username == currentUser.username
		) {
			handleEditingOfAPost = (
				<div className="flex">
					<Link to="/" className="bg-gray-400 px-4 py-3 hover:bg-gray-300">
						Edit
					</Link>
					<a href="" className="bg-gray-400 px-4 py-3 hover:bg-gray-300">
						Delete
					</a>
				</div>
			);
		}

		if (currentUser && currentUser.is_superuser == true) {
			handlePublishingOfAPost = (
				<a href="" className="bg-gray-400 px-4 py-3 hover:bg-gray-300">
					Publish
				</a>
			);
		}

		if (isAuthenticated) {
			handleCommentingOfAPost = (
				<form
					method="POST"
					className="w-3/4 mx-auto  container"
					onSubmit={this.handleCommentSubmit}
				>
					<div>
						<textarea
							name="comment_description"
							id=""
							cols="50"
							rows="10"
							value={this.state.comment_description}
							onChange={this.handleCommentChange}
							required
						></textarea>
					</div>
					<button type="submit" className="bg-gray-400 px-4 py-3 hover:bg-gray-300 mb-4">
						Add Comment
					</button>
				</form>
			);
		}
		return (
			currentPost && (
				<div>
					<div className="bg-white relative">
						<img src={currentPost.photo} className="h-64 w-full object-cover" alt="" />
						<div className="w-3/4 mx-auto container">
							<div className=" absolute top-0 pt-16 w-full">
								<h1 className="text-2xl text-white">{currentPost.title}</h1>
								<div className="flex items-center mt-3">
									<img
										src={currentPost.author.avatar}
										className="h-24 w-24 rounded-full"
										alt=""
									/>
									<div className="ml-4">
										<h2 className="text-xl text-white">
											<a href="">{currentPost.author.username}</a>
										</h2>
										<h3 className="text-xl text-white">
											{currentPost.created_at}
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-3/4 mx-auto mt-10 container">
						<div>
							<div>{currentPost.description}</div>

							<div className="mt-4">
								{handleEditingOfAPost}
								{handlePublishingOfAPost}
							</div>
						</div>
					</div>
					{currentPost.comments.map((comment, index) => (
						<div key={index} className="w-3/4 mx-auto mt-10 container">
							<h2 className="text-2xl">Comments</h2>

							<ul className="list-none">
								<li>
									{comment.description}
									{this.handleUpdatingOfAComment(comment)}
									<h1>By {comment.author.username}</h1>
								</li>
							</ul>
						</div>
					))}

					{handleCommentingOfAPost}
				</div>
			)
		);
	}
}
