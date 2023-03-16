
import './App.css';
import { Header } from './Components/Header/Header';
import './Components/EntryForm/EntryForm';
import { EntryForm } from './Components/EntryForm/EntryForm';
import { Footer } from './Components/Footer/Footer';
import { EntrySection } from './Components/EntrySection/EntrySection';


function App({className="App"}) {
  return (
  <>
  <Header text = "JOURNAL"></Header>
  <EntryForm />
  <EntrySection />
  <Footer text = "Journal App - 2028"/>
  </>)
}

export default App;
