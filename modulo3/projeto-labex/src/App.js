import { Router } from "./routes/Router";
import {GlobalStyle, MainContainer} from "./App.jsx"


function App() {
  return (
    <MainContainer>

      <GlobalStyle />
      <Router />

    </MainContainer>
  );
}

export default App;