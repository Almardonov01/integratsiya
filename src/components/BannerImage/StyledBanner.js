import styled from "styled-components";
import BannerImage from "../Photo/BannerImage.png";

export const BannerContainer = styled.div`
  height: 376px;
  width: 100%;
  background-image: url(${BannerImage});
  display: flex;
  align-items: flex-end;
`;

export const BannerInside = styled.div`
  width: 1224px;
  margin: 0 auto 64px;
`;

export const BannerTitle = styled.div`
  margin: ${({ margin }) => margin || "0"};
`;

export const SelectContainer = styled.div`
  max-width: ${({ width }) => width || "1216px"};
  margin: 0 auto 64px;
  @media screen and (max-width: 1230px) {
    width: 1100px;
  }
`;
