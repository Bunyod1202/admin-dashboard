import { CardItem } from "../carditem/CardItem";
import './cardlist.scss'

export const CardList = () => {
  const cardlists = [
    {
      text:"Unresolved",
      num:"60"
    },
    {
      text:"Overdue",
      num:"16"
    },
    {
      text:"Open",
      num:"43"
    },
    {
      text:"On hold",
      num:"64"
    },
  ]
  return (
    <ul className="card-list">
      {cardlists.map(cardlist => <CardItem key={cardlist.num}  text={cardlist.text} num={cardlist.num} />)}
    </ul>
  );
};

