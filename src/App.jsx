import Layout from "./pages/Layout";
import { ModeProvider } from "./ModeContext";

function App() {
  return (
    <ModeProvider>
      <Layout />
    </ModeProvider>
  );
}

export default App;
