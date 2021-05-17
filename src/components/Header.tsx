import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
  }
`;

export const Header = () => {
  return (
    <TitleContainer>
      <Title>Alex Calendar</Title>
    </TitleContainer>
  );
};
