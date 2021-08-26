import { Button, ButtonLabel } from "./Components/Button.style";
import { AppContainer } from "./Components/Container.style";

function App() {
  return (
    <AppContainer>
      <Button backgroundColor="red">
        <ButtonLabel>Click this button</ButtonLabel>
      </Button>
      <Button backgroundColor="violet">Click this button</Button>
    </AppContainer>
  );
}

export default App;
