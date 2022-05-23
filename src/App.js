import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginContextProvider from "./context/LoginContext";
import RouteGuard from "./RouteGuard";
import { GlobalCSS } from "./styles/GlobalCSS";
import { Container } from "./styles/Styles";

const theme = {
  colors: {
    primary: "#488bd4",
    secondary: "#656a70",
    danger: "#e32020",
    warning: "#ffd738",
    success: "#00f028",
    info: "#b8ebff",
  },
};

const App = () => {
  return (
    <LoginContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <Container>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/home"
                element={
                  <RouteGuard>
                    <Home />
                  </RouteGuard>
                }
              />
            </Routes>
          </Router>
        </Container>
      </ThemeProvider>
    </LoginContextProvider>
  );
};

export default App;
