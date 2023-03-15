import "./styles.css";

export default function App() {
  return <Greeting name="Yan"/>;
}

function Greeting({name}){
  return <p>hello, {name}!</p>
}