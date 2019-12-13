import Axios from "axios";
import { postPayload } from "../component/loginPayload";
export async function getLoginDetail() {
  const data = await Axios.get("https://swapi.co/api/people/");
  return data;
}

export async function getDemo() {
  const data = await Axios.get("https://swapi.co/api/people/");
  return data;
}

export async function getPost(payload: postPayload) {
  const data = await Axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    payload
  );
  return data;
}
