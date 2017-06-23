import React from 'react';
import PropTypes from 'prop-types';

// klasa komponentu
class Component extends React.Component {
  // kontrola typu przekazanej wartości
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  // obowiązkowa implementacja!
  render() {
    return <p>{this.props.text}</p>;
  }
}

// użycie komponentu
ReactDOM.render(<Component text="Hello world!" />, document.getElementById('root'));
