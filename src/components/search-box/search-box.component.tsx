import { Component, ReactNode } from 'react';
import './search-box.styles.css';
interface Props {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className: string;
}
class SearchBox extends Component<Props> {
  render(): ReactNode {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type='search'
        placeholder='search monsters'
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
