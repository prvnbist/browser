import styled from "styled-components";

export const StyledOverlay = styled.div`
  background: rgba(2, 2, 2, 0.9);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

export const Layout = styled.div`
  width: 720px;
  height: 100vh;
  margin: 0 auto;
  color: #fff;
`;

export const Title = styled.h2`
  font-weight: 400;
  color: #fff;
  margin: 24px 0 16px 0;
`;

export const Apps = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: 160px;
`;

export const App = styled.ul`
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  div {
    width: 64px;
    height: 64px;
    user-select: none;
    margin: 24px auto;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
  }
`;
