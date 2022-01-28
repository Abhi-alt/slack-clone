import styled from "styled-components";
import { useHistory } from "react-router-dom";
import db from "../firebase";

function SideBarOption({ Icon, title, Id, createChannel }) {
  const history = useHistory();

  const addChannel = () => {
    const roomName = prompt("Enter a channel name");
    if (roomName) {
      db.collection("rooms").add({ name: roomName });
    } else {
      alert("type a valid name");
    }
  };
  const selectChannel = () => {
    if (Id) {
      history.push(`/chat/room/${Id}`);
    } else {
      alert("No id available");
    }
  };
  return (
    <Content>
      {Icon ? <Icon className="icon" /> : <h3 className="icon">#</h3>}
      <h4 onClick={createChannel ? addChannel : selectChannel}>{title}</h4>
    </Content>
  );
}

export default SideBarOption;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .icon {
    margin: 10px;
    font-size: 20px;
  }
  h4 {
    font-weight: 600;
    cursor: pointer;
  }
`;
