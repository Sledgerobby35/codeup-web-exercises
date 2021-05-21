const blogContainer = document.getElementById("blog-container");
const userName = document.getElementById("userName");
	const userPost = document.getElementById("user-input");
const body = document.body;
addButtonEvent();

function addButtonEvent() {
	document.getElementById("submitBtn")
		.addEventListener("click", addPost);
}

function addPost() {
	// //GETTING BLOG CONTAINER AND SETTING CLASS OF ROW
	// let container = document.getElementById("blog-container");
	// container.setAttribute("class", "row");
	// //MAKING COL CONTAINERS FOR POSTS
	// let posts = document.createElement("div");
	// posts.setAttribute("class", "col-7")
	// //INSERTING FORM CONTENT TO POSTS
	// posts.textContent = document.getElementById("user-input").value;
	// container.appendChild(posts);
	blogContainer.appendChild(buildBlogPost());
}

function buildBlogPost() {
	let blogPost = document.createElement("div");
	blogPost.setAttribute("class", "card col-12 col-lg-5 mb-3 mr-none");
	let date = getDateNode()
	date.setAttribute("class", "card-header");
	blogPost.appendChild(date);
	blogPost.appendChild(getBlogText());
	return blogPost;
}

function getDateNode() {
	let dateTag = document.createElement("p");
	dateTag.textContent = new Date(Date.now()).toDateString();
	return dateTag;
}

function getBlogText() {
	let blogText = document.getElementById("user-input").value;
	let paragraphTag = document.createElement("p");
	paragraphTag.setAttribute("class", "p-4 card-body");
	paragraphTag.textContent = blogText;
	return paragraphTag;
}
function getBlogArea(){
	body.innerHtml = `<div class="container">
		<div class="row my-5 mx-3 ">
			<div class="col-12 px-0">
				<form action="">
					<div class="form-group my-0">
						<textarea id="user-input" class="form-control"></textarea>
					</div>
					<div class="form-group my-0">
						<input id="username" type="text" class="for-control">
					</div>
					<button id="submitBtn" class="btn btn-dark mt-1" type="button">
						POST
					</button>
				</form>
			</div>
		</div>

		<div id="blog-container">


		</div>

	</div>`;
}
