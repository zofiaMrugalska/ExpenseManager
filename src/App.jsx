import { ModeProvider } from "./Context";

import Layout from "./pages/Layout";

function App() {
  return (
    <ModeProvider>
      <Layout />
    </ModeProvider>
  );
}

export default App;
