import { postPayload } from "../component/loginPayload";
import { Post } from "../constant/post";

const POST_START = "POST_START";

export function getProfileStart(payload: postPayload) {
  return { type: POST_START, payload };
}

getProfileStart.toString = () => POST_START;

export function getProfileSuccess(data: Post) {
  return { type: "POST_SUCCESS", post: data };
}
