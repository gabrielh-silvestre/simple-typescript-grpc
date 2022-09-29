// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var post_pb = require('./post_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_Post(arg) {
  if (!(arg instanceof post_pb.Post)) {
    throw new Error('Expected argument of type posts.Post');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_Post(buffer_arg) {
  return post_pb.Post.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_PostAddCommentRequest(arg) {
  if (!(arg instanceof post_pb.PostAddCommentRequest)) {
    throw new Error('Expected argument of type posts.PostAddCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_PostAddCommentRequest(buffer_arg) {
  return post_pb.PostAddCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_PostCreateRequest(arg) {
  if (!(arg instanceof post_pb.PostCreateRequest)) {
    throw new Error('Expected argument of type posts.PostCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_PostCreateRequest(buffer_arg) {
  return post_pb.PostCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_PostListResponse(arg) {
  if (!(arg instanceof post_pb.PostListResponse)) {
    throw new Error('Expected argument of type posts.PostListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_PostListResponse(buffer_arg) {
  return post_pb.PostListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostsService = exports.PostsService = {
  createPost: {
    path: '/posts.Posts/CreatePost',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.PostCreateRequest,
    responseType: post_pb.Post,
    requestSerialize: serialize_posts_PostCreateRequest,
    requestDeserialize: deserialize_posts_PostCreateRequest,
    responseSerialize: serialize_posts_Post,
    responseDeserialize: deserialize_posts_Post,
  },
  addComment: {
    path: '/posts.Posts/AddComment',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.PostAddCommentRequest,
    responseType: post_pb.Post,
    requestSerialize: serialize_posts_PostAddCommentRequest,
    requestDeserialize: deserialize_posts_PostAddCommentRequest,
    responseSerialize: serialize_posts_Post,
    responseDeserialize: deserialize_posts_Post,
  },
  listPosts: {
    path: '/posts.Posts/ListPosts',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: post_pb.PostListResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_posts_PostListResponse,
    responseDeserialize: deserialize_posts_PostListResponse,
  },
};

exports.PostsClient = grpc.makeGenericClientConstructor(PostsService);
