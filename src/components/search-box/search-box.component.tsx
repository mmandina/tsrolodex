import './search-box.styles.css';
interface Props {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className: string;
}

const SearchBox = ({ onChangeHandler, placeholder, className }: Props) => {
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder='search monsters'
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
