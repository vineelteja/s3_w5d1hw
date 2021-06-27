import { Provider as ReduxProvider } from "react-redux";
import DarkThemeProvider from "./components/DarkThemeProvider";
import DarkThemeToggle from "./components/DarkThemeToggle";
import { Container } from "./utils";
import store from "./store";

import "./App.css";

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <DarkThemeProvider>
          <DarkThemeToggle />
          <Container>
            <h2>Welcome!</h2>
            <h3>Full Stack Web Development</h3>
          </Container>
        </DarkThemeProvider>
      </ReduxProvider>
    </>
  );
}

export default App;
