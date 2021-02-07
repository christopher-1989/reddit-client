import './App.css';
import { CardContainer } from "./components/Card/CardContainer";
import { Header } from './features/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer />
    </div>
  );
}

export default App;
