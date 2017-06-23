import React from 'react';
import PropTypes from 'prop-types';

// komponent funkcyjny
const Component = (props) => {
  return <p>{props.text}</p>;
}

// kontrola typu przekazanej wartości
Component.propTypes = {
  text: PropTypes.string.isRequired
};

// użycie komponentu
ReactDOM.render(<Component text="Hello world!" />, document.getElementById('root'));
