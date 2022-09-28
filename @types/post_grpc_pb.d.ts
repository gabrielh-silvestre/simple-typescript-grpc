// package: 
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as post_pb from "./post_pb";

interface IPostServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPost: IPostServiceService_ICreatePost;
    addComment: IPostServiceService_IAddComment;
    listPosts: IPostServiceService_IListPosts;
}

interface IPostServiceService_ICreatePost extends grpc.MethodDefinition<post_pb.PostCreateRequest, post_pb.Post> {
    path: "/PostService/CreatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.PostCreateRequest>;
    requestDeserialize: grpc.deserialize<post_pb.PostCreateRequest>;
    responseSerialize: grpc.serialize<post_pb.Post>;
    responseDeserialize: grpc.deserialize<post_pb.Post>;
}
interface IPostServiceService_IAddComment extends grpc.MethodDefinition<post_pb.PostAddCommentRequest, post_pb.Post> {
    path: "/PostService/AddComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.PostAddCommentRequest>;
    requestDeserialize: grpc.deserialize<post_pb.PostAddCommentRequest>;
    responseSerialize: grpc.serialize<post_pb.Post>;
    responseDeserialize: grpc.deserialize<post_pb.Post>;
}
interface IPostServiceService_IListPosts extends grpc.MethodDefinition<post_pb.Empty, post_pb.PostList> {
    path: "/PostService/ListPosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.Empty>;
    requestDeserialize: grpc.deserialize<post_pb.Empty>;
    responseSerialize: grpc.serialize<post_pb.PostList>;
    responseDeserialize: grpc.deserialize<post_pb.PostList>;
}

export const PostServiceService: IPostServiceService;

export interface IPostServiceServer {
    createPost: grpc.handleUnaryCall<post_pb.PostCreateRequest, post_pb.Post>;
    addComment: grpc.handleUnaryCall<post_pb.PostAddCommentRequest, post_pb.Post>;
    listPosts: grpc.handleUnaryCall<post_pb.Empty, post_pb.PostList>;
}

export interface IPostServiceClient {
    createPost(request: post_pb.PostCreateRequest, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    createPost(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    createPost(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    addComment(request: post_pb.PostAddCommentRequest, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    addComment(request: post_pb.PostAddCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    addComment(request: post_pb.PostAddCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    listPosts(request: post_pb.Empty, callback: (error: grpc.ServiceError | null, response: post_pb.PostList) => void): grpc.ClientUnaryCall;
    listPosts(request: post_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostList) => void): grpc.ClientUnaryCall;
    listPosts(request: post_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostList) => void): grpc.ClientUnaryCall;
}

export class PostServiceClient extends grpc.Client implements IPostServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPost(request: post_pb.PostCreateRequest, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public createPost(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public createPost(request: post_pb.PostCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public addComment(request: post_pb.PostAddCommentRequest, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public addComment(request: post_pb.PostAddCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public addComment(request: post_pb.PostAddCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.Post) => void): grpc.ClientUnaryCall;
    public listPosts(request: post_pb.Empty, callback: (error: grpc.ServiceError | null, response: post_pb.PostList) => void): grpc.ClientUnaryCall;
    public listPosts(request: post_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostList) => void): grpc.ClientUnaryCall;
    public listPosts(request: post_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostList) => void): grpc.ClientUnaryCall;
}
