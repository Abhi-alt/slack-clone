import styled from "styled-components";
import SideBarOption from "./SideBarOption";
import { useState, useEffect } from "react";
import db from "../firebase";
import { connect } from "react-redux";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function SideBar(props) {
  const [channel, setchannel] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setchannel(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  // console.log(channel);
  return (
    <Container>
      <Content>
        <SidebarHeader>
          <div>
            <h3>React Programmer</h3>
            <div className="user">
              <FiberManualRecordIcon />
              <p>{props.userInfo?.name}</p>
            </div>
          </div>
          <EditOutlinedIcon className="editIcon" />
        </SidebarHeader>
      </Content>
      <hr />
      <SideBarOption Icon={CommentOutlinedIcon} title="Threads" />
      <SideBarOption Icon={InboxOutlinedIcon} title="Mentions & reactions" />
      <SideBarOption Icon={DraftsOutlinedIcon} title="Saved items" />
      <SideBarOption
        Icon={BookmarkBorderOutlinedIcon}
        title="Channel browser"
      />
      <SideBarOption Icon={GroupsOutlinedIcon} title="People & user groups" />
      <SideBarOption Icon={AppsOutlinedIcon} title="Apps" />
      <SideBarOption Icon={FileCopyOutlinedIcon} title="File browser" />
      <SideBarOption Icon={ExpandLessOutlinedIcon} title="Show less" />
      <hr />
      <SideBarOption Icon={ExpandMoreOutlinedIcon} title="Channels" />
      <hr />
      <SideBarOption
        Icon={AddOutlinedIcon}
        createChannel="true"
        title="Add Channel"
      />
      {channel.map((ch) => {
        return <SideBarOption key={ch.id} Id={ch.id} title={ch.name} />;
      })}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user,
  };
};
export default connect(mapStateToProps)(SideBar);

const Container = styled.div`
  background-color: #58026e;
  /* max-width: 260px; */
  color: white;
  flex: 0.2;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  hr {
    border: 0.5px solid grey;
    margin: 10px 0;
  }
`;
const Content = styled.div`
  display: flex;
  padding: 10px;
`;
const SidebarHeader = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  .user {
    display: flex;
    align-items: center;
    svg {
      color: green;
      font-size: 15px;
    }
    p {
      font-size: 15px;
      font-weight: 200;
    }
  }
  .editIcon {
    background-color: white;
    border-radius: 900px;
    padding: 2px;
    color: grey;
    cursor: pointer;
  }
`;
