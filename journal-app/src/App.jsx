
import './App.css';
import { Header } from './Header/Header';
import './EntryForm/EntryForm';
import { InputBox, SubmitButton } from './EntryForm/EntryForm';
import { Footer } from './Footer/Footer';

function App() {
  return (
  <>
  <Header text = "JOURNAL" color = "black"/>
  <InputBox text = "Motto" ></InputBox>
  <InputBox text = "Notes" ></InputBox>
  <SubmitButton text ="Create"/>


  <Footer text = "Journal App - 2028"/>
  
  
  
  </>)
  
  

    
}

export default App;
