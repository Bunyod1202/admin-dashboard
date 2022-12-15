import './carditem.scss'
export const CardItem = ({text,num}) => {
  return (
    <li className="card">
      <p className="card-text">{text}</p>      
      <p className="card-number">{num}</p>      
    </li>
  );
};

