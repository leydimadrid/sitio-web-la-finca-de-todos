import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { AppNav } from "./Routes/AppNav";

function App() {
  return (
    <div className="App mt-20">
      <Header />
      <AppNav />
      <Footer/>
    </div>
  );
}

export default App;
