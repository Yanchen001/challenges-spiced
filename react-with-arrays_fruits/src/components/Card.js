import "./Card.css";

export default function Card({ name,color }) {
  return <p className="card" style={color:{color}}>{name}</p>;
}
