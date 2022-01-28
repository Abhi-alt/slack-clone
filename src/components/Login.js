import styled from "styled-components";
import Button from "@mui/material/Button";
import { auth, provider } from "../firebase";
import { signIn } from "../store/actions";
import { connect } from "react-redux";

function Login(props) {
  const signInHandle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => props.signIn(result.additionalUserInfo.profile))
      .catch((error) => alert(error));
  };
  return (
    <Container>
      <Content>
        <Img src="https://www.itprotoday.com/sites/itprotoday.com/files/appIcon_desktop.png" />
        <h1>Sign in to React Developer HQ</h1>
        <p>reactdeveloper.slack.com</p>
        <Button className="signIn" onClick={signInHandle}>
          Sign In with Google
        </Button>
      </Content>
    </Container>
  );
}

export default connect(null, { signIn })(Login);

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  padding: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  .signIn {
    background-color: green;
    color: white;
    margin-top: 20px;
    :hover {
      background-color: #00661b;
      color: white;
    }
  }
`;
const Img = styled.img`
  object-fit: contain;
  height: 200px;
  width: 200px;
  margin-bottom: 40px;
`;
