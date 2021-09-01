import { StyledButton } from "./Components/Button.style";
import { AppContainer } from "./Components/Container.style";

function App() {
  return (
    <AppContainer>
      <StyledButton
        buttonLabel="Click Here"
        backgroundColor="violet"
      ></StyledButton>
    </AppContainer>
  );
}

export default App;
