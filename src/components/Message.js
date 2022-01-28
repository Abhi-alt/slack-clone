import styled from "styled-components";

function Message({ img, user, timestamp, message }) {
  return (
    <Container>
      <Content>
        <Img src={img} />
        <Name>
          {user}
          <span>{timestamp}</span>
        </Name>
      </Content>
      <p>{message}</p>
    </Container>
  );
}

export default Message;

const Container = styled.div`
  padding: 8px 20px;
  p {
    margin-left: 50px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: contain;
`;

const Name = styled.h3`
  span {
    font-weight: 300;
    margin-left: 5px;
    font-size: 12px;
  }
`;
