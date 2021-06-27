import styled from "styled-components";
import theme from "styled-theming";

const theme1 = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

const theme2 = theme("theme", {
  light: "#000",
  dark: "#fff",
});

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${theme1};
  color: ${theme2};
`;

export const SwitchTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 75px;
  background-color: ${theme2};
  color: ${theme1};
`;
