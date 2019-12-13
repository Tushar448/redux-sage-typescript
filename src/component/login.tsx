import React from "react";
import { connect } from "react-redux";
import { getProfileStart } from "../action/loginContent";
import { Post } from "../constant/post";
import { postPayload } from "./loginPayload";
import Demo from "./demo";
export interface LoginProps {
  loadData: (data: postPayload) => void;
  data: Post;
}

export interface LoginState {}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps, state: LoginState) {
    super(props, state);
  }

  componentDidMount() {
    //this.props.loadData();
  }

  render() {
    const { data } = this.props;
    console.log(">>>>>>>>>data11111" + JSON.stringify(data));
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Submit</button>
        {data && (
          <div>
            <span>
              FirstName: <p>{data.title}</p>
            </span>
            <br />
            <span>
              LastName:<p>{data.body}</p>
            </span>
            <br />
          </div>
        )}
        <br />
      </React.Fragment>
    );
  }

  handleClick = () => {
    const abc: postPayload = {
      title: "foo",
      body: "bar",
      userId: 12
    };

    this.props.loadData(abc);
  };
}

const mapStateToProps = ({ saga }: any) => {
  return {
    data: saga.login.post
  };
};

const mapsDispatchToProps = (dispatch: any) => {
  return {
    loadData: (data: postPayload) => dispatch(getProfileStart(data))
  };
};

export default connect(mapStateToProps, mapsDispatchToProps)(Login);
