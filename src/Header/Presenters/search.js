import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  value,
  onChange,
  goTo,
  keyPress
  }) => {
    return (
      <div className="search column-content column-content--9">
        <input placeholder='Nunca dejes de buscar' value={value} onChange={onChange} onKeyPress={keyPress}/>
        <button onClick={goTo}>
          < img src='/img/ic_Search.png' srcSet="/img/ic_Search@2x.png 2x" alt='buscar'/>
        </button>
      </div>
)}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  goTo: PropTypes.func,
  keyPress: PropTypes.func,
}

export default Search;