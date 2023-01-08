import { useContext, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import styled from "styled-components";
import { TokenContext } from "../../contexts/TokenContext";

export function Likes({ post }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isliked, setIsLiked] = useState(post.is_liked)
  const { token } = useContext(TokenContext);

  async function handleLike(){
       
  }


  return (
    <Container>
      {isliked ? (
        <IoHeartSharp style={{ fontSize: "20px", color: " #AC0000" }} onClick={ handleLike}/>
      ) : (
        <IoHeartOutline
          IoHeartOutline
          style={{ fontSize: "20px", color: "#FFFFFF" }}
          onClick={handleLike}
        />
      )}
      <LikesAmount>
        {post.likes} likes
      </LikesAmount>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 53px;
  margin-top: 20px;
  cursor:pointer;
`;
const LikesAmount = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #ffffff;
  margin-top:3px;
`;
