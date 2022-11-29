import { Component, ReactNode } from 'react';
import { Monster } from '../../App';
import './card.styles.css';
interface Props {
  monster: Monster;
  key: number;
}
class Card extends Component<Props> {
  render(): ReactNode {
    const { name, id, email } = this.props.monster;
    return (
      <div className='card-container'>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
