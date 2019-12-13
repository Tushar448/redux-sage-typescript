import { Reducer, Action } from "redux";
import { postActionState, PostAction } from "../constant/action";

const initialCharacterState: postActionState = {};

export const loginReducer: Reducer<postActionState, Action> = (
  state = initialCharacterState,
  action
) => {
  if (PostAction(action)) {
    return {
      ...state,
      post: action.post
    };
  } else {
    return state;
  }
};
