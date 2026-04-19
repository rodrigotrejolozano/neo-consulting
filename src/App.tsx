import "./App.css";
import { Benefits } from "./components/Benefits/Benefits";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <main className="app">
      <Header onNavigate={() => {}} />
      <Benefits />
      <Footer />
    </main>
  );
}

export default App;
