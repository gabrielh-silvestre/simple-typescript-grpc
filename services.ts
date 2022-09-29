// import {
//   ServerUnaryCall,
//   sendUnaryData,
//   ServiceError,
//   handleUnaryCall,
// } from "@grpc/grpc-js";

import {
  ServerUnaryCall,
  sendUnaryData,
  ServiceError,
  handleUnaryCall,
} from "grpc";

import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { IPostsServer } from "./proto/post_grpc_pb";
import {
  Post,
  PostAddCommentRequest,
  PostCreateRequest,
  PostListResponse,
} from "./proto/post_pb";

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

export class PostsServer implements IPostsServer {
  createPost: handleUnaryCall<PostCreateRequest, Post> = (
    call: ServerUnaryCall<PostCreateRequest>,
    callback: sendUnaryData<Post>
  ): void => {
    const newPostTitle = call.request.getTitle();

    const newPost = new Post();
    newPost.setId(Math.max(...FAKE_DB.map((post) => post.id)) + 1);
    newPost.setTitle(newPostTitle);
    newPost.setComment("");

    FAKE_DB.push(newPost.toObject());

    callback(null, newPost);
    return;
  };

  addComment: handleUnaryCall<PostAddCommentRequest, Post> = (
    call: ServerUnaryCall<PostAddCommentRequest>,
    callback: sendUnaryData<Post>
  ) => {
    const postId = call.request.getPostId();
    const postNewComment = call.request.getComment();

    const post = FAKE_DB.find((post) => post.id === Number(postId));

    if (!post) {
      const error = new Error("Post not found") as ServiceError;
      error.code = 404;

      callback(error, null);
      return;
    }

    post.comment = postNewComment;

    const newPost = new Post();
    newPost.setId(post.id);
    newPost.setTitle(post.title);
    newPost.setComment(post.comment);

    callback(null, newPost);
    return;
  };

  listPosts: handleUnaryCall<Empty, PostListResponse> = (
    call: ServerUnaryCall<Empty>,
    callback: sendUnaryData<PostListResponse>
  ) => {
    const posts = FAKE_DB.map((post) => {
      const newPost = new Post();
      newPost.setId(post.id);
      newPost.setTitle(post.title);
      newPost.setComment(post.comment);

      return newPost;
    });

    const response = new PostListResponse();
    response.setPostsList(posts);

    callback(null, response);
    return;
  };
}
