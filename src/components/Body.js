import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import Message from "./Message";
import { useState, useEffect } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { connect } from "react-redux";
import firebase from "firebase";

function Body(props) {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState();

  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snap) => setRoomDetails(snap.data()));

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snap) => setMessages(snap.docs.map((doc) => doc.data())));
  }, [roomId]);

  const messageSubmitHandler = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      user: props.userInfo?.name,
      message: chat,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userImg: props.userInfo.picture,
    });
    setChat("");
  };
  // console.log(messages);
  return (
    <Container>
      <Content>
        <Header>
          <div className="left_header">
            <h3>#{roomDetails?.name}</h3>
            <StarBorderOutlinedIcon />
          </div>
          <div className="right_header">
            <InfoOutlinedIcon />
            <p>Details</p>
          </div>
        </Header>
        {messages
          ? messages.map((msg) => {
              return (
                <Message
                  key={msg.user + Math.random() * 987}
                  img={msg.userImg}
                  user={msg.user}
                  timestamp={new Date(msg.timestamp?.toDate()).toUTCString()}
                  message={msg.message}
                />
              );
            })
          : ""}
        <form onSubmit={messageSubmitHandler}>
          <input
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            placeholder={`# message ${roomDetails?.name}`}
          />
          <button type="submit">Send</button>
        </form>
      </Content>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user,
  };
};
export default connect(mapStateToProps)(Body);

const Container = styled.div`
  flex: 0.8;
  height: 100vh;
  overflow: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Content = styled.div`
  width: 100%;
  padding-bottom: 80px;

  form {
    position: fixed;
    bottom: 0;
    width: 100%;

    input {
      width: 100%;
      padding: 20px;
      :focus {
        outline: 1px solid grey;
      }
    }
    button {
      display: none;
    }
  }
`;
const Header = styled.div`
  border: 1px solid lightgrey;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left_header {
    display: flex;
    align-items: center;
    h3 {
      text-transform: lowercase;
    }
    svg {
      margin-left: 5px;
    }
  }
  .right_header {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`;
