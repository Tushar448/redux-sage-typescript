import { ICharacter } from "./character";
import { Action } from "redux";
import { Post } from "./post";

export function loginAction(action: Action): action is DataSuccess {
  return action.type === "DATA_SUCCESS";
}

export interface DataSuccess extends Action {
  type: "DATA_SUCCESS";
  data: ICharacter[];
}

export function PostAction(action: Action): action is PostSuccess {
  return action.type === "POST_SUCCESS";
}

export interface PostSuccess extends Action {
  type: "POST_SUCCESS";
  post: Post[];
}

export interface postActionState {
  post?: Post[];
}

export interface LoginActionState {
  data?: ICharacter[];
  hasContentError: boolean;
}
