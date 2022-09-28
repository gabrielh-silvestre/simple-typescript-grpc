import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { PostServiceService } from "./protoServices/post_grpc_pb";

import {
  Empty,
  Post,
  PostAddCommentRequest,
  PostCreateRequest,
} from "./protoServices/post_pb";

const FAKE_DB = [
  {
    id: 1,
    title: "Hello World",
    comment: "This is my first post",
  },
  {
    id: 2,
    title: "Hello World 2",
    comment: "This is my second post",
  },
];

const createPostService = (
  call: ServerUnaryCall<PostCreateRequest, Post>,
  callback: sendUnaryData<Post>
) => {
  const data = call.request.toObject();

  const newPost = new Post();
  newPost.setId(FAKE_DB.length + 1);
  newPost.setTitle(data.title);
  newPost.setComment("");

  FAKE_DB.push(newPost.toObject());

  callback(null, newPost);
};

const addCommentService = (
  call: ServerUnaryCall<PostAddCommentRequest, Post>,
  callback: sendUnaryData<Post>
) => {
  const { postId, comment } = call.request.toObject();

  const post = FAKE_DB.find((post) => post.id === Number(postId));

  if (post) {
    post.comment = comment;

    const newPost = new Post();
    newPost.setId(post.id);
    newPost.setTitle(post.title);
    newPost.setComment(post.comment);

    return callback(null, newPost);
  }

  callback(new Error("Post not found"), null);
};

const listPosts = (
  call: ServerUnaryCall<Empty, Post>,
  callback: sendUnaryData<Post[]>
) => {
  const posts = FAKE_DB.map((post) => {
    const newPost = new Post();
    newPost.setId(post.id);
    newPost.setTitle(post.title);
    newPost.setComment(post.comment);

    return newPost;
  });

  callback(null, posts);
};

const server = new Server();
server.bindAsync(
  "localhost:50051",
  ServerCredentials.createInsecure(),
  (_err, port) => {
    console.log(`Server running on port ${port}`);
  }
);

// const PostService: IPostServiceService = {} as IPostServiceService;

server.addService(PostServiceService, {
  createPost: createPostService,
  addComment: addCommentService,
  listPosts,
});
