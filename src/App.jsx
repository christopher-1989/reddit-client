import './App.css';
import { CardContainer } from "./components/Card/CardContainer";
import { BrowserMenu } from './features/Header/BrowserMenu';
import { Header } from './features/Header/Header';

function App() {
  return (
    <div className="App" id="App">
      <Header />
      <BrowserMenu className="browserMenu" />
      <CardContainer />
    </div>
  );
}

export default App;
