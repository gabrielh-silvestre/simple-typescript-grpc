import { Server, ServerCredentials } from "@grpc/grpc-js";
import { PostsService } from "./proto/post_grpc_pb";
import { PostsServer } from "./services";

const server = new Server();
server.addService(PostsService, new PostsServer() as any);

const PORT = 50051;
const URL = `localhost:${PORT}`;

server.bindAsync(URL, ServerCredentials.createInsecure(), (error, port) => {
  if (error) {
    throw error;
  }
  console.log(`Server running at ${URL}`);
  server.start();
});
