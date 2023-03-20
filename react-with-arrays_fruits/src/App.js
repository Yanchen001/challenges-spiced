import Card from "./components/Card";

export default function App() {
  const fruits = [{
    id:1,
    name: "banana",
    color: "yellow"
  },
  {
    id:2,
    name: "apple",
    color: "red"
  },
  { 
    id:3,
    name: "pear",
    color: "green"
  },
  {
    id:4,
    name: "peach",
    color: "pink"
  },
  {
    id:5,
    name: "grape",
    color: "purple"
  }

];

  return (
    <div>
      {fruits.map(({id, name}) => (
      <Card key={id} name={name} />
      ))}
    </div>

// <ul>
// {drinks.map(({ id, name }) => (
//   <li key={id}>{name}</li>
// ))}
// </ul>

  );
  }


    // <div className="app">
    //   <Card name="🍌 banana" />
    // </div>

