import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import Avatar from "@mui/material/Avatar";
import { connect } from "react-redux";

function Header(props) {
  return (
    <Container>
      <Content>
        <Left>
          <Avatar
            alt="Abhi"
            src={props.userInfo.picture}
            className="avataricon"
          />
          <AccessTimeIcon className="timeicon" />
        </Left>
        <Center>
          <SearchIcon />
          <Input placeholder="Search for react programmers" />
        </Center>
        <Right>
          <HelpIcon className="helpIcon" />
        </Right>
      </Content>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user,
  };
};
export default connect(mapStateToProps)(Header);

const Container = styled.div`
  background-color: var(--slack-color);
`;
const Content = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  .timeicon {
    color: grey;
    margin-left: 25px;
  }
  .avataricon {
    margin-left: 10px;
  }
`;
const Center = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  border: 1px solid grey;
  padding: 5px 20px;
  border-radius: 10px;
  width: 35vw;
  svg {
    color: grey;
  }
  input {
    background-color: transparent;
    color: white;
    width: 100%;
    border: none;
    :focus {
      outline: none;
    }
  }
`;
const Input = styled.input``;
const Right = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  .helpIcon {
    color: grey;
  }
`;
