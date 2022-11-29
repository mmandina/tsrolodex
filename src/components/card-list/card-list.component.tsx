import { Component, ReactNode } from 'react';
import { Monster } from '../../App';
import './card-list.styles.css';
import Card from '../card/card.component';
interface Props {
  monsters: Monster[];
}
class Cardlist extends Component<Props> {
  render(): ReactNode {
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default Cardlist;
