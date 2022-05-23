import React from "react";
import styled from "styled-components";
import { Button, FlexDiv } from "../styles/Styles";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <FlexDiv>
        <div>
          <H2>React SPA Project</H2>
          <PTag>Trainig react for front-end development</PTag>
          <Button>Download App</Button>
        </div>
        <div>
          <Img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWN0JTIwanN8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
            alt=""
          />
        </div>
      </FlexDiv>

      <FlexDiv>
        <div>
          <Img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
            alt=""
          />
        </div>
        <div>
          <PTag>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            amet pariatur modi ab quam laudantium dignissimos tenetur ad,
            asperiores magnam in atque beatae reiciendis deserunt deleniti minus
            quaerat voluptatum! Facere! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Atque aliquam amet saepe rerum nisi iusto! Porro
            magni provident voluptatem. Et quibusdam dignissimos quo sint
            assumenda qui libero impedit itaque suscipit. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Laudantium officiis quos, et iure
            molestias, veniam eveniet adipisci cum architecto quisquam
            necessitatibus impedit tempore numquam nam a quod autem laborum
            similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident ullam quis, reiciendis in dolore dolor magnam, odio,
            doloribus eveniet obcaecati ex adipisci? Repellat harum tempore
            laboriosam earum voluptas, facere quo?
          </PTag>
        </div>
      </FlexDiv>
      <FlexDiv>
        <div>
          <PTag>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            amet pariatur modi ab quam laudantium dignissimos tenetur ad,
            asperiores magnam in atque beatae reiciendis deserunt deleniti minus
            quaerat voluptatum! Facere! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Atque aliquam amet saepe rerum nisi iusto! Porro
            magni provident voluptatem. Et quibusdam dignissimos quo sint
            assumenda qui libero impedit itaque suscipit. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Laudantium officiis quos, et iure
            molestias, veniam eveniet adipisci cum architecto quisquam
            necessitatibus impedit tempore numquam nam a quod autem laborum
            similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident ullam quis, reiciendis in dolore dolor magnam, odio,
            doloribus eveniet obcaecati ex adipisci? Repellat harum tempore
            laboriosam earum voluptas, facere quo?
          </PTag>
        </div>
        <div>
          <Img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWN0JTIwanN8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
            alt=""
          />
        </div>
      </FlexDiv>
    </>
  );
};

export default Home;

const Img = styled.img`
  width: 500px;
  height: 250px;
`;
const PTag = styled.p`
  color: ${ props => props.theme.colors.secondary }
`;
const H2 = styled.h2`
  padding: 20px 0;
  font-weight: bolder;
  color: ${ props => props.theme.colors.primary }
`;

