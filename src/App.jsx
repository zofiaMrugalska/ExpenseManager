import Layout from "./pages/Layout";
import { ModeProvider } from "./Context";

function App() {
  return (
    <ModeProvider>
      <Layout />
    </ModeProvider>
  );
}

export default App;
