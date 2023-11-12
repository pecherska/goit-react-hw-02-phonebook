import FilterContainer from './Filter.styled';
const Filter = ({ name, onChange }) => {
  return (
    <FilterContainer>
      <label>Find contacts by name</label>
      <input type="text" value={name} onChange={onChange}></input>
    </FilterContainer>
  );
};

export default Filter;
