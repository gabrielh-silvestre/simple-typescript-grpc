// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var post_pb = require('./post_pb.js');

function serialize_Empty(arg) {
  if (!(arg instanceof post_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return post_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Post(arg) {
  if (!(arg instanceof post_pb.Post)) {
    throw new Error('Expected argument of type Post');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Post(buffer_arg) {
  return post_pb.Post.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PostAddCommentRequest(arg) {
  if (!(arg instanceof post_pb.PostAddCommentRequest)) {
    throw new Error('Expected argument of type PostAddCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PostAddCommentRequest(buffer_arg) {
  return post_pb.PostAddCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PostCreateRequest(arg) {
  if (!(arg instanceof post_pb.PostCreateRequest)) {
    throw new Error('Expected argument of type PostCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PostCreateRequest(buffer_arg) {
  return post_pb.PostCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PostList(arg) {
  if (!(arg instanceof post_pb.PostList)) {
    throw new Error('Expected argument of type PostList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PostList(buffer_arg) {
  return post_pb.PostList.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostServiceService = exports.PostServiceService = {
  createPost: {
    path: '/PostService/CreatePost',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.PostCreateRequest,
    responseType: post_pb.Post,
    requestSerialize: serialize_PostCreateRequest,
    requestDeserialize: deserialize_PostCreateRequest,
    responseSerialize: serialize_Post,
    responseDeserialize: deserialize_Post,
  },
  addComment: {
    path: '/PostService/AddComment',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.PostAddCommentRequest,
    responseType: post_pb.Post,
    requestSerialize: serialize_PostAddCommentRequest,
    requestDeserialize: deserialize_PostAddCommentRequest,
    responseSerialize: serialize_Post,
    responseDeserialize: deserialize_Post,
  },
  listPosts: {
    path: '/PostService/ListPosts',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.Empty,
    responseType: post_pb.PostList,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_PostList,
    responseDeserialize: deserialize_PostList,
  },
};

exports.PostServiceClient = grpc.makeGenericClientConstructor(PostServiceService);
