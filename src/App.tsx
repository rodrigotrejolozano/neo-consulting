import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <main className="app">
      <Header onNavigate={() => {}} />
      <Footer />
    </main>
  );
}

export default App;
