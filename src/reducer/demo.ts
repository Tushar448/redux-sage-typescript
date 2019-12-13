import { Reducer, Action } from "redux";

import { LoginActionState, loginAction } from "../constant/action";

const initialCharacterState: LoginActionState = {
  hasContentError: false
};

const DemoReducer: Reducer<LoginActionState, Action> = (
  state = initialCharacterState,
  action
) => {
  if (loginAction(action)) {
    return {
      ...state,
      data: action.data
    };
  } else {
    return state;
  }
};

export default DemoReducer;
