#!/bin/sh

grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./protoServices \
    --grpc_out=./protoServices \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    -I ./proto \
    ./proto/*.proto

protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=./@types \
    -I ./proto \
    ./proto/*.proto
