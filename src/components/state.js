import React from 'react';
import PropTypes from 'prop-types';

// klasa komponentu
class Component extends React.Component {
  constructor(props) {
    super(props);

    // stan początkowy definiuj w konstruktorze!
    this.state = { text: '' };
  }

  // metoda cyklu życia komponentu
  componentDidMount() {
    // stan zmieniaj zawsze za pomocą setState!!
    this.setState({ text: 'Hello world!' });
  }

  // obowiązkowa implementacja!
  render() {
    return <p>{this.state.text}</p>;
  }
}

// użycie komponentu
ReactDOM.render(<Component />, document.getElementById('root'));
