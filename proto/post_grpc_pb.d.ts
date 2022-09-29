// package: posts
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as post_pb from "./post_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IPostsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPost: IPostsService_ICreatePost;
    addComment: IPostsService_IAddComment;
    listPosts: IPostsService_IListPosts;
}

interface IPostsService_ICreatePost extends grpc.MethodDefinition<post_pb.PostCreateRequest, post_pb.Post> {
    path: "/posts.Posts/CreatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.PostCreateRequest>;
    requestDeserialize: grpc.deserialize<post_pb.PostCreateRequest>;
    responseSerialize: grpc.serialize<post_pb.Post>;
    responseDeserialize: grpc.deserialize<post_pb.Post>;
}
interface IPostsService_IAddComment extends grpc.MethodDefinition<post_pb.PostAddCommentRequest, post_pb.Post> {
    path: "/posts.Posts/AddComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.PostAddCommentRequest>;
    requestDeserialize: grpc.deserialize<post_pb.PostAddCommentRequest>;
    responseSerialize: grpc.serialize<post_pb.Post>;
    responseDeserialize: grpc.deserialize<post_pb.Post>;
}
interface IPostsService_IListPosts extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, post_pb.PostListResponse> {
    path: "/posts.Posts/ListPosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<post_pb.PostListResponse>;
    responseDeserialize: grpc.deserialize<post_pb.PostListResponse>;
}

export const PostsService: IPostsService;

export interface IPostsServer {
    createPost: grpc.handleUnaryCall<post_pb.PostCreateRequest, post_pb.Post>;
    addComment: grpc.handleUnaryCall<post_pb.PostAddCommentRequest, post_pb.Post>;
    listPosts: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, post_pb.PostListResponse>;
}

export interface IPostsClient {
    createPost(request: post_pb.PostCreateRequest, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    createPost(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    createPost(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    addComment(request: post_pb.PostAddCommentRequest, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    addComment(request: post_pb.PostAddCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    addComment(request: post_pb.PostAddCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    listPosts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: post_pb.PostListResponse) => void): grpc.ClientUnaryCall;
    listPosts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostListResponse) => void): grpc.ClientUnaryCall;
    listPosts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostListResponse) => void): grpc.ClientUnaryCall;
}

export class PostsClient extends grpc.Client implements IPostsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPost(request: post_pb.PostCreateRequest, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public createPost(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public createPost(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public addComment(request: post_pb.PostAddCommentRequest, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public addComment(request: post_pb.PostAddCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public addComment(request: post_pb.PostAddCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public listPosts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: post_pb.PostListResponse) => void): grpc.ClientUnaryCall;
    public listPosts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostListResponse) => void): grpc.ClientUnaryCall;
    public listPosts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostListResponse) => void): grpc.ClientUnaryCall;
}
