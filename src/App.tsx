import "./App.css";
import { Benefits } from "./components/Benefits/Benefits";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Steps } from "./components/Steps/Steps";

function App() {
  return (
    <main className="app">
      <Header onNavigate={() => {}} />
      <Benefits />
      <Steps />
      <Footer />
    </main>
  );
}

export default App;
