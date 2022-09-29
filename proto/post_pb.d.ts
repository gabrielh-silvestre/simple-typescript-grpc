// package: posts
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Post extends jspb.Message { 
    getId(): number;
    setId(value: number): Post;
    getTitle(): string;
    setTitle(value: string): Post;
    getComment(): string;
    setComment(value: string): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Post.AsObject;
    static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Post;
    static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
    export type AsObject = {
        id: number,
        title: string,
        comment: string,
    }
}

export class PostCreateRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): PostCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCreateRequest): PostCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCreateRequest;
    static deserializeBinaryFromReader(message: PostCreateRequest, reader: jspb.BinaryReader): PostCreateRequest;
}

export namespace PostCreateRequest {
    export type AsObject = {
        title: string,
    }
}

export class PostAddCommentRequest extends jspb.Message { 
    getPostId(): string;
    setPostId(value: string): PostAddCommentRequest;
    getComment(): string;
    setComment(value: string): PostAddCommentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostAddCommentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostAddCommentRequest): PostAddCommentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostAddCommentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostAddCommentRequest;
    static deserializeBinaryFromReader(message: PostAddCommentRequest, reader: jspb.BinaryReader): PostAddCommentRequest;
}

export namespace PostAddCommentRequest {
    export type AsObject = {
        postId: string,
        comment: string,
    }
}

export class PostListResponse extends jspb.Message { 
    clearPostsList(): void;
    getPostsList(): Array<Post>;
    setPostsList(value: Array<Post>): PostListResponse;
    addPosts(value?: Post, index?: number): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostListResponse): PostListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostListResponse;
    static deserializeBinaryFromReader(message: PostListResponse, reader: jspb.BinaryReader): PostListResponse;
}

export namespace PostListResponse {
    export type AsObject = {
        postsList: Array<Post.AsObject>,
    }
}
